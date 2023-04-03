import React from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";
function NavItem({ htmlText }) {
  return (
    <div>
      <a href='#' className='nav_memu'>
        {htmlText}
      </a>
    </div>
  );
}

export default NavItem;
