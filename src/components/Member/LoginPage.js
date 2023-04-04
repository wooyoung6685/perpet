import React from "react";
import "./LoginPage.css";
import { Button, Checkbox, Form, Input, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import NaverLogin from './NaverLogin'
import KakaoLogin from "./KakaoLogin";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function LoginPage() {
  const navigate = useNavigate();
  const onClickMembership = () => {
    navigate("/Member/Membership");
  };

  return (
    <div className="loginpage">
      <div className="loginpage_logo">
        <img src="/images/Header/logo.svg" alt="logo" />
      </div>
      <div className="loginpage_form">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 9,
          }}
          style={{
            maxWidth: 1200,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label=""
            name="username"
            rules={[
              {
                required: false,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="loginpage_input-id" placeholder="아이디 또는 이메일을 입력해주세요" />
          </Form.Item>
          <Form.Item
            label=""
            name="password"
            rules={[
              {
                required: false,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="loginpage_input-pw" placeholder="비밀번호를 입력해주세요" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 18,
            }}
          >
            <ConfigProvider
              theme={{
                components: {
                  Checkbox: {
                    colorPrimary: "#ff4d4f",
                  },
                },
              }}
            >
              <div className='loginpage_login-option'>
                <Checkbox className='loginpage_login-autologin'>자동 로그인</Checkbox>
                <div className="snsLogin">
                  <KakaoLogin />
                  <NaverLogin />
                </div>
              </div>

            </ConfigProvider>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 9,
            }}
          >

            <div className='loginpage_inner'>
              <div className="loginpage_button">
                <Button className="loginpage_button-login" type="primary" htmlType="submit" shape="round" danger size="large">
                  로그인
                </Button>
              </div>
              <div>
                <Button className="loginpage_button-login" htmlType="submit" shape="round" size="large" onClick={onClickMembership}>
                  회원가입
                </Button>
              </div>
            </div>

          </Form.Item>
        </Form>
      </div>
      <div className="loginpage_text"></div>
      <div className="loginpage_sns"></div>
    </div>
  );
}

export default LoginPage;
