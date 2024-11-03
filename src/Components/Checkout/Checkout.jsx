import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './Checkout.css';
import Navbar from "../Navbar/Navbar";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Checkoutcart = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Destructure the product details from state

  const [quantity, setQuantity] = useState(product ? product.quantity : 1); // Initialize with the selected pack quantity
  const [isInCart, setIsInCart] = useState(!!product); // Check if product exists in cart

  // Use the selected pack price from the product and update total price based on quantity
  const unitPrice = product ? product.price : 0;
  const totalPrice = unitPrice * quantity;

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const removeItem = () => {
    setIsInCart(false); // Remove the item from the cart
  };

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <h1>Your Cart</h1>
        <div className="carts-both">
          {isInCart && product ? (
            <div className="cartdetails">
              <img className="cushionimg1" src={product.image} alt={product.name} />
              <p className="product">{product.name}</p>
              
              <div className="quantity-selector">
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
              </div>

              <div className="pricesection">
                ₹{totalPrice}
              </div>

              <button className="remove-button" onClick={removeItem}>Remove</button>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="total-cart-section">
          <h1>Cart Total</h1>
          <div className="total-amount">
            ₹{isInCart ? totalPrice : 0}
            <br />
            <button className="paynow">Pay Now</button>
            <br></br>
            <div className="icons">
            <CreditCardIcon className="icon"></CreditCardIcon><p className="cardd">Credit Card</p>
            </div>
            <div className="icons">
            <CreditCardIcon className="icon"></CreditCardIcon><p className="cardd">Debit Card</p>
            </div>

            <div className="icons">
            <AttachMoneyIcon className="icon"></AttachMoneyIcon><p className="cardd">Cash on Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkoutcart;
