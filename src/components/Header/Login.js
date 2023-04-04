import { Button } from "antd";
import { ShoppingCartOutlined, BellOutlined} from "@ant-design/icons";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const onClickMembership = () => {
    navigate("/Member/Membership");
  };
  const onClickLoginPage = () => {
    navigate("/Member/LoginPage");
  };
  return (
    <div className="login">
      <div className="login_first">
        <Button style={{ fontSize: "20px", color: "#000" }} size="large" type="text" shape="circle" icon={<BellOutlined />}></Button>
        <div className="bellshow">
          <div className="bellshow_text">
            <span>가입하고 강아지 장난감</span>
            <p>주문하면 오늘 출발!</p>
            <div className="bellshow_button">
              <Button className="bellshow_button-first" type="primary" danger onClick={onClickLoginPage}>
                로그인
              </Button>
              <Button className="bellshow_button-second" onClick={onClickMembership}>
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button style={{ fontSize: "20px", color: "#000" }} size="large" type="text" shape="circle" icon={<ShoppingCartOutlined />}></Button>
    </div>
  );
}

export default Login;
