import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./IconSlider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Grid, Scrollbar, Navigation } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

function IconSlider() {
  const icons = [
    {
      src: "images/IconSlider/ic_categories-puppy.png",
      alt: "1세 미만 강아지 사료",
      title: "퍼피 사료",
      subTitle: "1세 미만",
    },
    {
      src: "images/IconSlider/ic_categories-dogAdult.png",
      alt: "1~7세 강아지 사료",
      title: "어덜트 사료",
      subTitle: "1~7세",
    },
    {
      src: "images/IconSlider/ic_categories-dogSenior.png",
      alt: "7세 이상 강아지 사료",
      title: "시니어 사료",
      subTitle: "7세 이상",
    },
    {
      src: "images/IconSlider/ic_categories-dogAll.png",
      alt: "전연령 강아지 사료",
      title: "전연령 사료",
    },
    {
      src: "images/IconSlider/ic_categories-dryFood.png",
      alt: "건식 강아지사료",
      title: "건식사료",
    },
    {
      src: "images/IconSlider/ic_categories-softFood.png",
      alt: "강아지 소프트사료",
      title: "소프트사료",
    },
    {
      src: "images/IconSlider/ic_categories-wetFood.png",
      alt: "강아지 습식사료",
      title: "습식사료",
    },
    {
      src: "images/IconSlider/ic_categories-rawFood.png",
      alt: "강아지 건조생식",
      title: "건조생식",
    },
    {
      src: "images/IconSlider/ic_categories-powder.png",
      alt: "강아지 파우더",
      title: "파우더",
    },
    {
      src: "images/IconSlider/ic_categories-stick.png",
      alt: "강아지 저키/트릿",
      title: "저키/트릿",
    },
    {
      src: "images/IconSlider/ic_categories-chicken.png",
      alt: "강아지 사사미",
      title: "사사미",
    },
    {
      src: "images/IconSlider/ic_categories-watarDog.png",
      alt: "강아지 급식기/급수기",
      title: "급식기/급수기",
    },
    {
      src: "images/IconSlider/ic_categories-treat.png",
      alt: "강아지 껌",
      title: "껌",
    },
    {
      src: "images/IconSlider/ic_categories-health.png",
      alt: "강아지 건강관리",
      title: "건강관리",
    },
    {
      src: "images/IconSlider/ic_categories-toiletDog.png",
      alt: "강아지 화장실",
      title: "위생/배변",
    },
    {
      src: "images/IconSlider/ic_categories-toyDog.png",
      alt: "강아지 장난감",
      title: "장난감",
    },
    {
      src: "images/IconSlider/ic_categories-lineDog.png",
      alt: "강아지 목줄/가슴줄",
      title: "목줄/가슴줄",
    },
    {
      src: "images/IconSlider/ic_categories-movingField.png",
      alt: "강아지 이동장",
      title: "이동장",
    },
    {
      src: "images/IconSlider/ic_categories-wash.png",
      alt: "강아지 미용/목욕",
      title: "미용/목욕",
    },
    {
      src: "images/IconSlider/ic_categories-houseDog.png",
      alt: "강아지 집",
      title: "하우스/울타리",
    },

    {
      src: "images/IconSlider/ic_categories-kitten.png",
      alt: "1세 미만 고양이",
      title: "키튼 사료",
      subTitle: "1세 미만",
    },
    {
      src: "images/IconSlider/ic_categories-catAdult.png",
      alt: "1~7세 고양이 사료",
      title: "어덜트 사료",
      subTitle: "1~7세",
    },
    {
      src: "images/IconSlider/ic_categories-catSenior.png",
      alt: "7세 이상 고양이 사료",
      title: "시니어 사료",
      subTitle: "7세 이상",
    },
    {
      src: "images/IconSlider/ic_categories-catAll.png",
      alt: "전연령 고양이 사료",
      title: "전연령 사료",
    },
    {
      src: "images/IconSlider/ic_categories-dryFood.png",
      alt: "고양이 건식사료",
      title: "건식사료",
    },
    {
      src: "images/IconSlider/ic_categories-can.png",
      alt: "고양이 캔사료",
      title: "캔 사료",
    },
    {
      src: "images/IconSlider/ic_categories-pouchFood.png",
      alt: "고양이 파우치 사료",
      title: "파우치 사료",
    },
    {
      src: "images/IconSlider/ic_categories-rawFood.png",
      alt: "고양이 건조생식",
      title: "건조생식",
    },
    {
      src: "images/IconSlider/ic_categories-leaf.png",
      alt: "고양이 캣닢/그라스",
      title: "캣닢/그라스",
    },
    {
      src: "images/IconSlider/ic_categories-stick.png",
      alt: "고양이 저키",
      title: "저키",
    },
    {
      src: "images/IconSlider/ic_categories-chicken.png",
      alt: "고양이 통살/소시지",
      title: "통살/소시지",
    },

    {
      src: "images/IconSlider/ic_categories-watarCat.png",
      alt: "고양이 급식기/급수기",
      title: "급식기/급수기",
    },
    {
      src: "images/IconSlider/ic_categories-catTower.png",
      alt: "스크래쳐/캣타워",
      title: "스크래쳐/캣타워",
    },
    {
      src: "images/IconSlider/ic_categories-health.png",
      alt: "고양이 건강관리",
      title: "건강관리",
    },
    {
      src: "images/IconSlider/ic_categories-sand.png",
      alt: "고양이 모래",
      title: "모래",
    },
    {
      src: "images/IconSlider/ic_categories-toyCat.png",
      alt: "고양이 장난감",
      title: "장난감",
    },
    {
      src: "images/IconSlider/ic_categories-lineCat.png",
      alt: "고양이 목줄/가슴줄",
      title: "목줄/가슴줄",
    },
    {
      src: "images/IconSlider/ic_categories-movingField.png",
      alt: "고양이 이동장",
      title: "이동장",
    },
    {
      src: "images/IconSlider/ic_categories-wash.png",
      alt: "고양이 미용/목욕",
      title: "미용/목욕",
    },
    {
      src: "images/IconSlider/ic_categories-houseCat.png",
      alt: "고양이 집",
      title: "하우스",
    },
  ];
  return (
    <div className="ParentIconSlider">
      <Swiper
        slidesPerView={10}
        grid={{
          rows: 2,
          fill: "row",
        }}
        scrollbar={{
          hide: false,
        }}
        modules={[Grid, Scrollbar, Navigation]}
        className='IconSlider'
        style={{
          height: "262px",
        }}
        navigation
      >
        {icons.map((icons, idx) => {
          return (
            <SwiperSlide
              key={idx}
              style={{
                width: "93.2px",
                marginRight: "28px",
              }}
            >
              <div className='iconSlider_icons-box'>
                <a href='/' className='iconSlider_icons-link'>
                  <div className='iconSlider_icons-imgBox'>
                    <img src={`/${icons.src}`} alt={`${icons.alt}`}></img>
                  </div>
                  <div className='iconSlider_icons-title'>{icons.title}</div>
                  <div className='iconSlider_icons-subTitle'>{icons.subTitle}</div>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default IconSlider;
