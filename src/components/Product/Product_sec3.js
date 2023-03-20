import React from "react";
import "./Product_sec3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Product_sec2() {
  const product2 = [
    { image: "images/Product/pet_toy3.jpg", name: "바나나장난감", price: "10,000원", seller: "바나나" },
    { image: "images/Product/pet_food3.jpg", name: "개껌", price: "25,000원", seller: "네추럴코어" },
    { image: "images/Product/pet_house3.jpg", name: "집", price: "40,000원", seller: "아늑해" },
    { image: "images/Product/pet_acc3.png", name: "목줄", price: "7,000원", seller: "안전하개" },
    { image: "images/Product/pet_food4.jpg", name: "양치간식", price: "25,000원", seller: "덴티페어리" },
    { image: "images/Product/pet_toy4.png", name: "장난감", price: "10,000원", seller: "그루비볼" },
    { image: "images/Product/pet_acc4.jpg", name: "하네스", price: "7,000원", seller: "산책좋아" },
    { image: "images/Product/pet_house4.jpg", name: "집", price: "40,000원", seller: "포근해" },
  ];
  return (
    <div>
      <h2 className='product-title'>후기 1,000개 돌파 상품⭐</h2>
      <div class='ParentProduct3'>
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
          {product2.map((product2, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div id='product-list'>
                  <ProductItem image={`${product2.image}`} name={product2.name} price={product2.price} seller={product2.seller} />
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
