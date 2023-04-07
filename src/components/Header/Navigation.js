import React from "react";
import "./Navigation.css";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navigation() {
  const items = [
    {
      label: <Link to={`/products/category/food`}>사료</Link>,
      key: "1",
    },
    {
      label: <Link to={`/products/category/snack`}>간식</Link>,
      key: "2",
    },
    {
      label: <Link to={`/products/category/healthcare`}>건강관리</Link>,
      key: "3",
    },
    {
      label: <Link to={`/products/category/hygiene`}>위생</Link>,
      key: "4",
    },
    {
      label: <Link to={`/products/category/beauty`}>미용</Link>,
      key: "5",
    },
    {
      label: <Link to={`/products/category/feeder`}>급식기</Link>,
      key: "6",
    },
    {
      label: <Link to={`/products/category/house`}>하우스</Link>,
      key: "7",
    },
    {
      label: <Link to={`/products/category/scratch`}>스크레쳐</Link>,
      key: "8",
    },
  ];
  const navigate = useNavigate();
  const onClickUpload = () => {
    navigate("/Upload/UploadPage");
  };
  return (
    <div>
      <ul className="Navigation">
        <li>
          <Dropdown menu={{ items }}>
            <span onClick={(e) => e.preventDefault()}>
              <MenuOutlined className="MenuOutlined" style={{ marginTop: "-2px" }} />
              <Space style={{ fontSize: "16px", color: "#454545", fontWeight: "600" }}>카테고리</Space>
            </span>
          </Dropdown>
        </li>
        <li>
          <Button icon={<UploadOutlined />} danger onClick={onClickUpload}>
            상품 업로드
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
