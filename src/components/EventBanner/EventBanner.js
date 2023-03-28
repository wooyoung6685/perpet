import React from "react";
import { Link } from "react-router-dom";
import "./EventBanner.css";

function EventBanner() {
  return (
    <div className="eventBanner">
      <Link to="/">
        <img src="./images/EventBanner/EventBanner1.png" />
      </Link>
    </div>
  );
}

export default EventBanner;
