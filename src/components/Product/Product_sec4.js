import React from "react";
import "./Product_sec4.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Product_sec2() {
  return (
    <div>
      <h2 className='product-title'>지금 구매하면 사은품이 와르르🎁</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className='Product_slide4'
      >
        <SwiperSlide>
          <div id='product-list'>
            <ProductItem img='./images/Product/pet_food4.jpg' name='양치간식' price='25,000원' seller='덴티페어리' />
            <ProductItem img='./images/Product/pet_toy4.png' name='장난감' price='10,000원' seller='그루비볼' />
            <ProductItem img='./images/Product/pet_acc4.jpg' name='하네스' price='7,000원' seller='산책좋아' />
            <ProductItem img='./images/Product/pet_house4.jpg' name='집' price='40,000원' seller='포근해' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='product-list'>
            <ProductItem img='./images/Product/pet_acc1.png' name='하네스' price='15,000원' seller='펫베오' />
            <ProductItem img='./images/Product/pet_food1.jpg' name='양치간식' price='20,000원' seller='그리니스' />
            <ProductItem img='./images/Product/pet_toy1.jpg' name='말장난감' price='3,000원' seller='말' />
            <ProductItem img='./images/Product/pet_house1.jpg' name='집' price='40,000원' seller='아늑해' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='product-list'>
            <ProductItem img='./images/Product/pet_food2.jpg' name='사료' price='25,000원' seller='네추럴코어' />
            <ProductItem img='./images/Product/pet_toy2.jpg' name='당근노즈워크' price='10,000원' seller='노즈워크' />
            <ProductItem img='./images/Product/pet_acc2.jpg' name='넥카라' price='7,000원' seller='핥지마' />
            <ProductItem img='./images/Product/pet_house2.jpg' name='집' price='40,000원' seller='아늑해' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='product-list'>
            <ProductItem img='./images/Product/pet_toy3.jpg' name='바나나장난감' price='10,000원' seller='바나나' />
            <ProductItem img='./images/Product/pet_food3.jpg' name='개껌' price='25,000원' seller='네추럴코어' />
            <ProductItem img='./images/Product/pet_house3.jpg' name='집' price='40,000원' seller='아늑해' />
            <ProductItem img='./images/Product/pet_acc3.png' name='목줄' price='7,000원' seller='안전하개' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Product_sec2;
