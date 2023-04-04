import React from "react";
import "./Membership.css";
import { Button, Checkbox, Form, Input, Divider, ConfigProvider } from "antd";
import { useState } from "react";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["만 14세 이상입니다.(필수)", "이용약관(필수)", "개인정보수집 및 이용동의(필수)", "이벤트,쿠폰,핫딜 알림 메일 및 SMS 수신(선택)"];
const defaultCheckedList = [""];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Membership() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="membership">
      <h1>회원가입</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: [""],
          prefix: "86",
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <div className="membership_input">
          <Form.Item
            name="email"
            label="아이디"
            rules={[
              {
                type: "email",
                message: "아이디를 입력해주세요(이메일)",
              },
              {
                required: false,
                message: "아이디를 입력해주세요(이메일)",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="비밀번호"
            rules={[
              {
                required: false,
                message: "비밀번호를 확인해주세요",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="비밀번호 확인"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: false,
                message: "비밀번호를 확인해주세요",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="address"
            label="주소"
            rules={[
              {
                required: false,
                message: "주소를 입력해주세요",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label="휴대폰 번호"
            rules={[
              {
                required: false,
                message: "휴대폰 번호를 입력해주세요",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
        </div>
        <div className="membership_checkbox">
          <ConfigProvider
            theme={{
              components: {
                Checkbox: {
                  colorPrimary: "#ff4d4f",
                },
              },
            }}
          >
            <Checkbox onChange={onCheckAllChange} checked={checkAll}>
              모두 동의합니다
            </Checkbox>
            <Divider />
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
          </ConfigProvider>
        </div>

        <div className="membership_submit">
          <Form.Item {...tailFormItemLayout} style={{ paddingRight: "150px", paddingTop: "50px" }}>
            <Button type="primary" htmlType="submit" size="large" danger style={{ width: "313px" }}>
              회원가입 완료
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default Membership;
