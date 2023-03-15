import React from "react";
import "./ProductItem.css";
import { Rate } from 'antd';
import { BrowserRouter, Link } from "react-router-dom";

function ProductItem({ name, price, seller, img }) {
  return (
    <div id="product-list">
      <div className="product-card">
        <BrowserRouter>
          <Link to="/">
            <div className="product-img_box"><img className="product-img" src={img} alt="product-img" /></div>
          </Link>
        </BrowserRouter>
        <div className="product-content">
          <span className="product-seller">{seller}</span>
          <span className="product-name">{name}</span>
          <span className="product-price">{price}</span>
        </div>
        <Rate className="star" disabled defaultValue={3} />
        <span className="star_num"> 3</span>
      </div>
    </div>
  )
}

export default ProductItem;
