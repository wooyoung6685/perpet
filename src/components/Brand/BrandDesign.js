import React from "react";
import "./Brand.css";

function BrandDesign() {
  const DesignItems = [
    {
      id: 1,
      src: "./images/Brand/perpets.png",
      alt: "PERPET의 약속",
      text: "더 나은 반려 생활을 위한 PERPET의 약속",
    },
    {
      id: 2,
      src: "./images/Brand/calender.png",
      alt: "유통기한 책임제",
      text: "유통기한 3개월 미만 상품 유통기한 책임제",
    },
    {
      id: 3,
      src: "./images/Brand/trust.png",
      alt: "브랜드 상품 판매",
      text: "신뢰성을 인정받은 브랜드 상품 판매",
    },
  ];
  return (
    <div className="brand_design-background">
      <div className="brand_inner">
        <div className="brand_design-container">
          <img className="ratio_img" src="https://funnc-static-images.s3.ap-northeast-2.amazonaws.com/dogpre/mobile_banner/mobile_banner.png" alt="arrow" />
          {DesignItems.map((item) => (
            <div className="brand_design-item" key={item.id}>
              <img src={item.src} alt={item.alt} />
              <div className="brand_design-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandDesign;
