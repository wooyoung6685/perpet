import React, { useState } from "react";
import "./ProductItem.css";
import { Rate } from "antd";
import { Link } from "react-router-dom";

function ProductItem({ id, name, price, seller, image, orgPrice, discount, soldout }) {
  const [rating, setRating] = useState(5);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div id='product-list' className={`soldout${soldout}`}>
      <div className='product-card'>
        <Link to={`/products/${id}`}>
          <div className='product-img_box'>
            <img className='product-img' src={image} alt='product-img' />
          </div>
        </Link>
        <div className='product-content'>
          <span className='product-seller'>{seller}</span>
          <span className='product-name'>{name}</span>
          <span className='price-box'>
            <div className='origin-price'>{orgPrice}</div>
            {discount ? <span className='product-disc'>{discount}</span> : <span></span>}
            <span className='product-price'>{price}원</span>
          </span>
          <span>
            <Rate className='star' value={rating} onChange={handleRatingChange} />
            <span className='star_num'> {rating}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;