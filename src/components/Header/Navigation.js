import React from "react";
import NavItem from "./NavItem";
import "./Navigation.css";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
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
  return (
    <div>
      <ul className="Navigation">
        <li>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <MenuOutlined className="MenuOutlined" style={{ paddingBottom: "5px" }} />
              <Space style={{ fontSize: "18px", color: "#454545", fontWeight: "600" }}>카테고리</Space>
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
          <NavItem htmlText="사료샘플" />
        </li>
        <li>
          <NavItem htmlText="이벤트" />
        </li>
        <li>
          <NavItem htmlText="스티커샵" />
        </li>
        <li>
          <NavItem htmlText="노하우" />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
