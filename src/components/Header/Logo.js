import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="./images/Header/logo.svg" />
      </Link>
    </div>
  );
}

export default Logo;
