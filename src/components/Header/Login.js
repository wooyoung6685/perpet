import React from "react";
import { Button } from "antd";
import { ShoppingCartOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Button style={{ fontSize: "20px", color: "#000" }} size="large" type="text" shape="circle" icon={<BellOutlined />}></Button>
      <Button style={{ fontSize: "20px", color: "#000" }} size="large" type="text" shape="circle" icon={<UserOutlined />}></Button>
      <Button style={{ fontSize: "20px", color: "#000" }} size="large" type="text" shape="circle" icon={<ShoppingCartOutlined />}></Button>
    </div>
  );
}

export default Login;
