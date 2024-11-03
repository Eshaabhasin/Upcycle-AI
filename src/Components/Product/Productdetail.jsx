import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../data/collection.json"; // Import your JSON data here
import './ProductDetail.css';
import Navbar from "../Navbar/Navbar";

const ProductDetail = () => {
  const { productId } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(productId));

  const [selectedPack, setSelectedPack] = useState(1);
  const packPrices = {
    1: parseInt(product.price.replace(/[^0-9]/g, '')),
    2: 2 * parseInt(product.price.replace(/[^0-9]/g, '')),
    4: 4 * parseInt(product.price.replace(/[^0-9]/g, ''))
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handlePackSelection = (pack) => {
    setSelectedPack(pack);
  };

  const handleAddToCart = () => {
    // Navigate to checkout and pass product details as state
    navigate('/checkout', {
      state: {
        product: {
          name: product.name,
          image: product.image,
          price: packPrices[selectedPack], // Correct price according to selected pack
          quantity: selectedPack           // Pass selected pack as quantity
        }
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="left">
          <img className="cushionimg" src={product.image} alt={product.name} />
        </div>
        <div className="right">
          <h1 className="cushioninfo">{product.name}</h1>
          <p className="productinformation">{product.description}</p>
          
          <p className="pack">Pack of:</p>
          <div className="pack-selection">
            {[1, 2, 4].map((pack) => (
              <button
                key={pack}
                className={`pack-option ${selectedPack === pack ? 'selected' : ''}`}
                onClick={() => handlePackSelection(pack)}
              >
                {pack}
              </button>
            ))}
          </div>

          <div className="priceinformation">
            <span>Price: </span>
            <span className="current-price">₹{packPrices[selectedPack]}</span>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
