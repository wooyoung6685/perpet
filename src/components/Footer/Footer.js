import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer_inner ">
        <div className="flex mg_top-20">
          <img src="./images/Footer/logo.svg" alt="myImage" />
        </div>
        <div className="flex mg_top-20">
          <div>회사소개</div>
          <div className="mg_left-10 footer_font-bold">개인정보처리방침</div>
          <div className="mg_left-10">이용약관</div>
          <div className="mg_left-10">제휴입점 및 문의</div>
          <div className="mg_left-10">사용자 정보</div>
        </div>
        <div className="flex mg_top-20">
          <div>대표자 : 박규복 </div>
          <div className="mg_left-10">사업자등록번호 12-34-5678</div>
          <div className="mg_left-10">주소 서울특별시 강남구 가나다 12, 마바마바 아자아자</div>
        </div>
        <div className="flex mg_top-20">
          <div>통신 판매업 제 1234- 1234</div>
          <div className="mg_left-10">개인정보보호책임자 : 김춘복</div>
          <div className="mg_left-10">팩스 12-345-6789</div>
        </div>
        <div className="flex mg_top-20">
          <div className="footer_font-small">Tel: 00-1234-5678 </div>
          <div className="footer_font-small mg_left-10">Email : helloanimal@test.com</div>
          <div className="icon">
            <div>
              <img src="./images/Footer/facebook.png" alt="facebook" />
              <img className="mg_left-10" src="./images/Footer/instagram.png" alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
