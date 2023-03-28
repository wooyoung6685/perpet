import React from "react";
import NavItem from "./NavItem";
import "./Navigation.css";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "사료",
    key: "1",
  },
  {
    label: "간식",
    key: "2",
  },
  {
    label: "건강관리",
    key: "3",
  },
  {
    label: "위생/배변",
    key: "4",
  },
  {
    label: "미용/목욕",
    key: "5",
  },
  {
    label: "급식기/급수기",
    key: "6",
  },
  {
    label: "하우스/울타리",
    key: "7",
  },
];

function Navigation() {
  const navigate = useNavigate();
  const onClickUpload = () => {
    navigate("/Upload/UploadPage");
  };
  return (
    <div>
      <ul className="Navigation">
        <li>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <MenuOutlined className="MenuOutlined" style={{ marginTop: "-2px" }} />
              <Space style={{ fontSize: "16px", color: "#454545", fontWeight: "600" }}>카테고리</Space>
            </a>
          </Dropdown>
        </li>
        <li>
          <NavItem htmlText="랭킹" />
        </li>
        <li>
          <NavItem htmlText="신상품" />
        </li>
        <li>
          <NavItem htmlText="브랜드" />
        </li>
        <li>
          <Button icon={<UploadOutlined />} danger onClick={onClickUpload}>상품 업로드</Button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
