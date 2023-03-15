import { Button } from "antd";
import { ShoppingCartOutlined, UserOutlined, BellOutlined, RightOutlined } from "@ant-design/icons";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Button className="login_first" style={{ fontSize: "20px", color: "#000" }} size="large" type="text" shape="circle" icon={<BellOutlined />}></Button>
      <Button className="login_second" style={{ fontSize: "20px", color: "#000" }} size="large" type="text" shape="circle" icon={<UserOutlined />}></Button>
      <Button style={{ fontSize: "20px", color: "#000" }} size="large" type="text" shape="circle" icon={<ShoppingCartOutlined />}></Button>
      <div className="bellshow">
        <div className="bellshow_text">
          <span>가입하고 강아지 장난감</span>
          <p>주문하면 오늘 출발!</p>
          <div className="bellshow_button">
            <Button className="bellshow_button-first" type="primary" danger>
              로그인
            </Button>
            <Button className="bellshow_button-second">회원가입</Button>
          </div>
        </div>
      </div>
      <div className="usershow">
        <ul className="usershow_item">
          <li>
            <a href="" alt="">
              최근본
            </a>
            <RightOutlined style={{ fontSize: "13px", color: "#ccc" }} />
          </li>
          <li>
            <a href="" alt="">
              배송조회
            </a>
            <RightOutlined style={{ fontSize: "13px", color: "#ccc" }} />
          </li>
          <li>
            <a href="" alt="">
              주문취소
            </a>
            <RightOutlined style={{ fontSize: "13px", color: "#ccc" }} />
          </li>
          <li>
            <a href="" alt="">
              교환하기
            </a>
            <RightOutlined style={{ fontSize: "13px", color: "#ccc" }} />
          </li>
          <li>
            <a href="" alt="">
              반품하기
            </a>
            <RightOutlined style={{ fontSize: "13px", color: "#ccc" }} />
          </li>
          <li>
            <a href="" alt="">
              고객센터
            </a>
            <RightOutlined style={{ fontSize: "13px", color: "#ccc" }} />
          </li>
        </ul>
        <div className="bellshow_text">
          <span>가입하고 강아지 장난감</span>
          <p>주문하면 오늘 출발!</p>
          <div className="bellshow_button">
            <Button className="bellshow_button-first" type="primary" danger>
              로그인
            </Button>
            <Button className="bellshow_button-second">회원가입</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
