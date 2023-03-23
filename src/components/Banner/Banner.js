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
  const bannerImg = [
    {
      src: "images/Banner/banner_01.png",
      alt: "01배너",
    },
    {
      src: "images/Banner/banner_02.png",
      alt: "02배너",
    },
    {
      src: "images/Banner/banner_03.png",
      alt: "03배너",
    },
    {
      src: "images/Banner/banner_04.png",
      alt: "04배너",
    },
    {
      src: "images/Banner/banner_05.png",
      alt: "05배너",
    },
    {
      src: "images/Banner/banner_06.png",
      alt: "06배너",
    },
  ];
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
      style={{}}
    >
      {bannerImg.map((bannerImg, idx) => {
        return (
          <SwiperSlide key={idx}>
            <img src={`${bannerImg.src}`} alt={`${bannerImg.alt}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Banner;
