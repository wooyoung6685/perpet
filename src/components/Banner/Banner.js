import React from "react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/autoplay";
import "./Banner.css";

function Banner() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2500 }}
      className='Banner_slide'
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
      }}
    >
      <SwiperSlide>
        <img src='images/Banner/banner_01.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/Banner/banner_02.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/Banner/banner_03.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/Banner/banner_04.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/Banner/banner_05.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/Banner/banner_06.png' alt='' />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
