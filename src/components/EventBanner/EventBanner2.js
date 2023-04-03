import React from "react";
import { Link } from "react-router-dom";
import "./EventBanner2.css";

function EventBanner2({ img, category }) {
  return (
    <div className='eventBanner2'>
      <Link to={`products/category/${category}`}>
        <img src={img} />
      </Link>
    </div>
  );
}

export default EventBanner2;
