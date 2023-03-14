import React from "react";
import NavItem from "./NavItem";
import "./Navigation.css";
import { MenuOutlined } from "@ant-design/icons";

function Navigation() {
  return (
    <div>
      <ul className="Navigation">
        <li>
          <a href="#" className="nav_memu">
            <MenuOutlined className="MenuOutlined" />
            카테고리
          </a>
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
