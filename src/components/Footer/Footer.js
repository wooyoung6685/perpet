import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import "./Footer.css";


function Footer() {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "8") {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: "대표자: 박규복",
      key: "1",
    },
    {
      label: "사업자 등록번호: 110111-7164174",
      key: "2",
    },
    {
      label: "주소 : 서울특별시 강남구 대방동 49, 크로바오피스텔 (01459)",
      key: "3",
    },
    {
      label: "통신판매업 : 제 2023-서울부산-2592호",
      key: "4",
    },
    {
      label: "개인정보보호책임자 : 김춘복",
      key: "5",
    },
    {
      label: "팩스 : 010-868-2604",
      key: "6",
    },
    {
      label: "Tel: 010-868-2604",
      key: "7",
    },
    {
      label: "Email : gyubok2@gmail.com",
      key: "8",
    },
  ];
  return (
    <>
      <div className="footer_inner">
        <div className="flex footer_pd-left footer_mg-top-60">
          <img src="/images/Footer/logo.svg" alt="myImage" />
        </div>
        <div className="footer_pd-left footer_font">
          <div className="flex footer_mg-top-20">
            <div className="footer_font-top">
              <p className="footer_font-style">회사소개</p>
            </div>
            <div className="footer_font-top2 footer_font-bold">
              <p className="footer_font-style">개인정보처리방침</p>
            </div>
            <div className="footer_font-top2 footer_color">
              <p className="footer_font-style">이용약관</p>
            </div>
            <div className="footer_font-top2 footer_color">
              <p className="footer_font-style">제휴입점 및 문의</p>
            </div>
            <div className="footer_font-top2 footer_color">사용자 정보</div>
          </div>
          <div className="flex footer_mg-top-20">
            <div className="footer_mg-right-20">
              <span className="footer_font-1">대표자</span>
              <span className="footer_font-2 ">박규복</span>
            </div>
            <div className="footer_margin-01">
              <span className="footer_font-1">사업자등록번호</span>
              <span className="footer_font-2">110111-7164174</span>
            </div>
            <div className="footer_margin-01">
              <span className="footer_font-1">주소</span>
              <span className="footer_font-3">서울특별시 강남구 대방동 49, 크로바오피스텔 (01459)</span>
            </div>
          </div>
          <div className="flex footer_mg-top-20">
            <div className="footer_mg-right-30">
              <span className="footer_font-1">통신 판매업</span>
              <span className="footer_font-2">제 2023-서울부산-2592호</span>
            </div>
            <div className="footer_mg-left-10 footer_mg-right-30">
              <span className="footer_font-1">개인정보보호책임자</span>
              <span className="footer_font-2">김춘복</span>
            </div>
            <div className="footer_mg-left-10">
              <span className="footer_font-1">팩스</span>
              <span className="footer_font-3">010-868-2604</span>
            </div>
          </div>
          <div className="flex footer_mg-top-10 ">
            <div className="footer_font3">전화번호: 010-868-2604 </div>
            <div className="footer_mg-left-10 footer_font3">Email : gyubok2@gmail.com</div>
            <div className="icon">
              <div className="footer_pd-right">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/Footer/facebook.png" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img className="footer_mg-left-10" src="/images/Footer/instagram.png" alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="footer_middle footer_mg-top-60">
            <div className="footer_middle-flex">
              <img src="./images/Footer/logo.svg" alt="myImage" />
            </div>
            <div className="footer_middle-center footer_mg-top-20">
              <Dropdown
                menu={{
                  items,
                  onClick: handleMenuClick,
                }}
                onOpenChange={handleOpenChange}
                open={open}
              >
                <Button onClick={(e) => e.preventDefault()}>
                  <Space>
                    사업자 정보
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
            <div className="footer_middle-center footer_mg-top-20">
              <p className="footer_middle-mg">회사소개</p>
              <p className="footer_middle-mg footer_font-bold">개인정보 처리방침</p>
              <p className="footer_middle-mg">이용 약관</p>
              <p className="footer_middle-mg">사업자 정보 확인</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
