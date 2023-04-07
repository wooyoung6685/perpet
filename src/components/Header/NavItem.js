import React from "react";
import "./NavItem.css";

function NavItem({ htmlText }) {
  return (
    <div>
      <a href='#none' className='nav_memu'>
        {htmlText}
      </a>
    </div>
  );
}

export default NavItem;
