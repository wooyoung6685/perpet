import React from "react";
import { Link } from "react-router-dom";
import "./EventBanner2.css";

function EventBanner2({ img,id }) {
  return (
    <div className="eventBanner2">
      <Link to={`products/${id}`}>
        <img src={img} />
      </Link>
    </div>
  );
}

export default EventBanner2;
