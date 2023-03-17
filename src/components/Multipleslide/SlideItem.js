import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "./SlideItem.css";
import ProductItem from "../Product/ProductItem";

function SlideItem({ title }) {
  return (
    <div>
      <p className='title'>{title}</p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          width: "1200px",
        }}
        className='MultipleSlide'
      >
        <SwiperSlide>
          <div>
            <div className='SwiperSlide_main'>
              <a href='#'>
                <img className='SwiperSlide_main-lmg' src='https://img.dogpre.com/web/dogpre/event/banner/3933/3933_mobile_main_page_banner_7478.jpg' />
                <p>건강 필수템 최대 66% 할인</p>
              </a>
            </div>
            <div className='ProductItem_main'>
              <ProductItem img='./images/Product/pet_acc1.png' name='하네스' price='15,000원' seller='펫베오' />
              <ProductItem img='./images/Product/pet_food3.jpg' name='개껌' price='25,000원' seller='네추럴코어' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='SwiperSlide_main'>
              <a href='#'>
                <img className='SwiperSlide_main-lmg' src='https://img.dogpre.com/web/dogpre/event/banner/3933/3933_mobile_main_page_banner_7478.jpg' />
                <p>건강 필수템 최대 66% 할인</p>
              </a>
            </div>
            <div className='ProductItem_main'>
              <ProductItem img='./images/Product/pet_acc1.png' name='하네스' price='15,000원' seller='펫베오' />
              <ProductItem img='./images/Product/pet_food3.jpg' name='개껌' price='25,000원' seller='네추럴코어' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='SwiperSlide_main'>
              <a href='#'>
                <img className='SwiperSlide_main-lmg' src='https://img.dogpre.com/web/dogpre/event/banner/3933/3933_mobile_main_page_banner_7478.jpg' />
                <p>건강 필수템 최대 66% 할인</p>
              </a>
            </div>
            <div className='ProductItem_main'>
              <ProductItem img='./images/Product/pet_acc1.png' name='하네스' price='15,000원' seller='펫베오' />
              <ProductItem img='./images/Product/pet_food3.jpg' name='개껌' price='25,000원' seller='네추럴코어' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideItem;
