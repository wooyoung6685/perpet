import React from "react";
import "./Product_sec2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Product_sec2() {
  const product1 = [
    { image: "images/Product/pet_food2.jpg", name: "사료", price: "25,000원", seller: "네추럴코어" },
    { image: "images/Product/pet_toy2.jpg", name: "당근노즈워크", price: "10,000원", seller: "노즈워크" },
    { image: "images/Product/pet_acc2.jpg", name: "넥카라", price: "7,000원", seller: "핥지마" },
    { image: "images/Product/pet_house2.jpg", name: "집", price: "40,000원", seller: "아늑해" },
    { image: "images/Product/pet_toy3.jpg", name: "바나나장난감", price: "10,000원", seller: "바나나" },
    { image: "images/Product/pet_food3.jpg", name: "개껌", price: "25,000원", seller: "네추럴코어" },
    { image: "images/Product/pet_house3.jpg", name: "집", price: "40,000원", seller: "아늑해" },
    { image: "images/Product/pet_acc3.png", name: "목줄", price: "7,000원", seller: "안전하개" },
  ];
  return (
    <div>
      <h2 className='product-title'>이 상품 어때❔</h2>
      <div class='ParentProduct2'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className='Product_slide1'
        >
          {product1.map((product1, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div id='product-list'>
                  <ProductItem image={`${product1.image}`} name={product1.name} price={product1.price} seller={product1.seller} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Product_sec2;
