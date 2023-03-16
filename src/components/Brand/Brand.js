import React from "react";
import "./Brand.css";
import BrandDesign from "./BrandDesign.js";



function Brand() {
  const images = [
    {
      id: 1,
      src: "./images/Brand/orizen.png",
      brandname: "오리젠",
    },
    {
      id: 2,
      src: "./images/Brand/acana.png",
      brandname: "아카나",
    },
    {
      id: 3,
      src: "./images/Brand/royalcanin.png",
      brandname: "로얄캐닌",
    },
    {
      id: 4,
      src: "./images/Brand/attu.png",
      brandname: "아투",
    },
    {
      id: 5,
      src: "./images/Brand/now.png",
      brandname: "NOW",
    },
    {
      id: 6,
      src: "./images/Brand/hills.png",
      brandname: "힐스",
    },
    {
      id: 7,
      src: "./images/Brand/ziwipeak.png",
      brandname: "지위픽",
    },
    {
      id: 8,
      src: "./images/Brand/proplan.png",
      brandname: "프로플랜",
    },
    {
      id: 9,
      src: "./images/Brand/rawz.png",
      brandname: "로우즈",
    },
    {
      id: 10,
      src: "./images/Brand/cesar.png",
      brandname: "시저",
    },
  ];

  return (
    <div>
      <div className="brand_inner">
        <div className="brand_flex brand_mg-top60">
          <p className="brand_text-01">국내 최대 브랜드 보유!</p>
          <p className="brand_text-02">더보기</p>
        </div>
        <div className="brand_name">
          {images.map((image) => (
            <div className="brand_card-box brand_mg-top" key={image.id}>
              <img src={image.src} alt={image.brandname} />
              <p className="brand_text-03">{image.brandname}</p>
            </div>
          ))}
        </div>
      </div>
      <BrandDesign />
    </div>
  );
}

export default Brand;
