import React from "react";
import { Link } from "react-router-dom";
import "./EventBanner.css";

function EventBanner() {
  return (
    <div className='eventBanner_container'>
      <div className='eventBanner'>
        <Link to='/products/category/food'>
          <img src='/images/EventBanner/EventBanner1.png' alt="event banner"/>
        </Link>
      </div>
    </div>
  );
}

export default EventBanner;
