import React from "react";
import "./Header.css";
import Login from "./Login";
import Logo from "./Logo";
import NavButton from "./NavButton";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onClickUpload = () => {
    navigate("/Upload/UploadPage");
  };
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
            <Button icon={<UploadOutlined />} danger onClick={onClickUpload}>상품 업로드</Button>
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
