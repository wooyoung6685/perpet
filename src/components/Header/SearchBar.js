import React from "react";
import { Input, Form } from "antd";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchbar_main">
      <Form>
        <Input className="searchbar" size="large" />
        <Button style={{ fontSize: "25px" }} className="searchbar_icon" size="large" type="text" danger shape="circle" icon={<SearchOutlined />}></Button>
      </Form>
    </div>
  );
}

export default SearchBar;
