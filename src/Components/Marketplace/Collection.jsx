import React, { useState, useEffect } from "react";
import './Collection.css';
import { NavLink } from "react-router-dom";
import productsData from "../../data/collection.json"; // Adjust the path if necessary

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Directly set products data from imported JSON
    setProducts(productsData);
  }, []);

  return (
    <div id="card-container" className="cards-wrapper">
      {products.map(product => (
        <NavLink to={`/product/${product.id}`} key={product.id}>
          <div className="child1">
            <img
              className="product1"
              src={product.image}
              alt={product.name}
            />
            <p className="product-details">{product.name}</p>
            <p className="price">{product.price}</p>
          </div>

          <div className="child1">
            <img
              className="product1"
              src={product.image}
              alt={product.name}
            />
            <p className="product-details">{product.name}</p>
            <p className="price">{product.price}</p>
          </div>

          <div className="child1">
            <img
              className="product1"
              src={product.image}
              alt={product.name}
            />
            <p className="product-details">{product.name}</p>
            <p className="price">{product.price}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Collection;
