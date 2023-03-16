import React from "react";
import "./Brand.css";


function BrandDesign() {
  return (
    <div className="brand_design-bg">
      <div className="brand_inner">
        <div className="brand_design-base">
          <div className="brand_design-cover">
            <img src={"./images/Brand/perpets.png"} alt="PERPET의 약속" />
            <div className="brand_design-text">더 나은 반려 생활을<br/>위한 PERPET의 약속</div>
          </div>
          <div className="brand_design-cover">
            <img src={"./images/Brand/calender.png"} alt="유통기한 책임제" />
            <div className="brand_design-text">유통기한 3개월 미만<br/>상품에 대한 유통기한 책임제</div>
          </div>
          <div className="brand_design-cover">
            <img src={"./images/Brand/trust.png"} alt="브랜드 상품 판매" />
            <div className="brand_design-text">신뢰성을 인정받은<br/>브랜드 상품 판매</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandDesign;
