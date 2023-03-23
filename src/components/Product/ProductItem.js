import React from "react";
import "./ProductItem.css";
import { Rate } from "antd";
import { Link } from "react-router-dom";

function ProductItem({ name, price, seller, image, orgPrice, disc }) {
  return (
    <div id='product-list'>
      <div className='product-card'>
        <Link to='/'>
          <div className='product-img_box'>
            <img className='product-img' src={image} alt='product-img' />
          </div>
        </Link>
        <div className='product-content'>
          <span className='product-seller'>{seller}</span>
          <span className='product-name'>{name}</span>
          <span className='price-box'>
            <div className='origin-price'>{orgPrice}원</div>
            <span className='product-disc'>{disc}</span>
            <span className='product-price'>{price}원</span>
          </span>
          <span>
            <Rate className='star' disabled defaultValue={3} />
            <span className='star_num'> 3</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
