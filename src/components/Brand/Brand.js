import React from "react";
import "./Brand.css";

function Brand() {
  const images = [
    {
      id: 1,
      src: "./images/Brand/orizen.png",
      alt: "오리젠",
      href: "https://www.orijenpetfoods.com/en-US/homepage",

    },
    {
      id: 2,
      src: "./images/Brand/acana.png",
      alt: "아카나",
      href: "https://www.acana.com/en-US/homepage",

    },
    {
      id: 3,
      src: "./images/Brand/royalcanin.png",
      alt: "로얄캐닌",
      href: "https://www.royalcanin.com/kr",

    },
    {
      id: 4,
      src: "./images/Brand/attu.png",
      alt: "아투",
      href: "https://aatu.co.uk/collections/dog-food",

    },
    {
      id: 5,
      src: "./images/Brand/now.png",
      alt: "NOW",
      href: "https://nowfresh.com/en",

    },
    {
      id: 6,
      src: "./images/Brand/hills.png",
      alt: "힐스",
      href: "https://www.hillspet.co.kr/",

    },
    {
      id: 7,
      src: "./images/Brand/ziwipeak.png",
      alt: "지위픽",
      href: "https://shop.ziwipets.com",

    },
    {
      id: 8,
      src: "./images/Brand/proplan.png",
      alt: "프로플랜",
      href: "https://www.purina.com/pro-plan",
    },
    {
      id: 9,
      src: "./images/Brand/rawz.png",
      alt: "로우즈",
      href: "https://rawznaturalpetfood.com",
    },
    {
      id: 10,
      src: "./images/Brand/cesar.png",
      alt: "시저",
      href: "https://www.cesar.com",
    },
  ];

  return (
    <div>
      <div className="brand_inner">
        <div className="brand_flex brand_mg-top60">
          <h2>브랜드 리스트🧾</h2>
        </div>
        <div className="brand_name">
          {images.map((image) => (
            <div className="brand_card-box brand_mg-top" key={image.id}>
              <a href={image.href} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={image.alt} />
                <p className="brand_text-03">{image.alt}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;
