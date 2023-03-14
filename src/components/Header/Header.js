import React from "react";
import "./Header.css";
import Login from "./Login";
import Logo from "./Logo";
import NavButton from "./NavButton";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="header">
      <div className="header_main">
        <div className="header_main-logo">
          <Logo />
        </div>
        <div className="header_main-searchbar">
          <SearchBar />
        </div>
        <div className="header_side">
          <div className="header_side-login">
            <Login />
          </div>
        </div>
      </div>
      <div className="header_nav">
        <Navigation />
        <NavButton />
      </div>
    </div>
  );
}

export default Header;
