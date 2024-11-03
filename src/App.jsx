import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import topimage from '/assets/img2.png';
import Market from './Components/Market/Market';
import Productdetail from './Components/Product/Productdetail';
import Checkoutcart from './Components/Checkout/Checkout';
import Nvidia from './Components/TextToImage/TextToImageGenerator';
import Paymentcart from './Components/Payment/Payment';
import Signin from './Components/Joinus/Signin';
import { SignInButton } from '@clerk/clerk-react';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showNvidia, setShowNvidia] = useState(false);
  const nvidiaRef = useRef(null);

  const handleCreateClick = () => {
    setShowNvidia(true);
  };

  const handleClickOutside = (event) => {
    if (nvidiaRef.current && !nvidiaRef.current.contains(event.target)) {
      setShowNvidia(false);
    }
  };

  useEffect(() => {
    if (showNvidia) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNvidia]);

  return (
    <div className={isHomePage ? "home-page" : ""}>
      {isHomePage && (
        <div className="navbar">
          <img className="img1" src={topimage} alt="Top" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Signin></Signin></li> {/* Updated with 'to' prop */}
          </ul>
        </div>
      )}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <div className="container">
                <h1 className="main-heading">WELCOME TO UPCYCLE AI</h1>
                <div>
                  <p className="content">
                    A platform that promotes circular economy transforming waste into upcycled products.
                  </p>
                  <button className='create' onClick={handleCreateClick}>Let's create</button>
                </div>
              </div>
              {showNvidia && (
                <div ref={nvidiaRef} className="nvidia-container slide-in">
                  <Nvidia />
                </div>
              )}
            </>
          } 
        />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/marketplace" element={<Market />} />
        <Route path="/join" element={<Signin />} /> {/* Signin component route */}
        <Route path="/product/:productId" element={<Productdetail />} />
        <Route path="/checkout" element={<Checkoutcart />} />
        <Route path="/paymentcart" element={<Paymentcart />} />
      </Routes>
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
