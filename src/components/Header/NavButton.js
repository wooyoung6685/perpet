import React from "react";
import "./NavButton.css";
import { Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="navButton">
      <Link onClick={showModal}>
        <img src="/images/Header/gnb_banner_new.svg" alt='banner'/>
      </Link>
      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src="/images/EventBanner/ExpirationDateGuaranteePc.jpg" alt='banner'/>
      </Modal>
    </div>
  );
}

export default NavButton;
