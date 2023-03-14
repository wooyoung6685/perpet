import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

function ProductItem({ name, price, seller, img }) {
  return (
    <div id="product-list">
      <div className="product-card">
        <a href="/">
          <img className="product-img" src={img} alt="product-img" />
          <div className="product-content">
            <span className="product-seller">{seller}</span>
            <span className="product-name">{name}</span>
            <span className="product-price">{price}</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProductItem;
