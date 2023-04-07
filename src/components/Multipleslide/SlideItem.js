import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "./SlideItem.css";
import ProductItem from "../Product/ProductItem";

function SlideItem({ title }) {
  return (
    <div className="ParentMultipleSlide">
      <h2 className="title">{title}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          maxWidth: "1200px",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="MultipleSlide"
        breakpoints={{
          1150: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <div className="SwiperSlide_main">
              <a href="#none">
                <img className="SwiperSlide_main-lmg" src="https://img.dogpre.com/web/dogpre/event/banner/3952/3952_mobile_main_page_banner_8941.jpg" alt="banner"/>
                <p>대용량상품 최대 66% 할인</p>
              </a>
            </div>
            <div className="ProductItem_main">
              <ProductItem id="1" image="images/Product/dog_acc1.png" name="하네스" price="15,000" seller="펫베오" />
              <ProductItem id="6" image="images/Product/dog_food3.jpg" name="개껌" price="25,000" seller="네추럴코어" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="SwiperSlide_main">
              <a href="#none">
                <img className="SwiperSlide_main-lmg" src="https://img.dogpre.com/web/dogpre/event/banner/3933/3933_mobile_main_page_banner_7478.jpg" alt="banner"/>
                <p>건강 필수템 최대 66% 할인</p>
              </a>
            </div>
            <div className="ProductItem_main">
              <ProductItem id="7" image="images/Product/cat_brush3.jpg" name="브러쉬" price="12,000" seller="캣앤독" />
              <ProductItem id="8" image="images/Product/cat_food3.png" name="고양이사료" price="35,000" seller="로얄캐닌" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="SwiperSlide_main">
              <a href="/">
                <img className="SwiperSlide_main-lmg" src="https://img.dogpre.com/web/dogpre/event/banner/3882/3882_mobile_main_page_banner_4586.jpg" alt="banner"/>
                <p>건강 필수템 최대 66% 할인</p>
              </a>
            </div>
            <div className="ProductItem_main">
              <ProductItem id="9" image="images/Product/cat_scratcher2.jpg" name="스크레쳐" price="20,000" seller="개리개리" />
              <ProductItem id="10" image="images/Product/dog_house3.jpg" name="귀여운토끼집" price="37,000" seller="딴딴이네" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideItem;
