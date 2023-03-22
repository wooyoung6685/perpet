import React from "react";
import "./Product_sec4.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Product_sec2() {
  const product3 = [
    { image: "./images/Product/dog_food4.jpg", name: "양치간식", price: "25,000원", seller: "덴티페어리" },
    { image: "images/Product/cat_brush1.jpg ", name: "브러쉬", price: "25,000원", seller: "케어펫" },
    { image: "./images/Product/dog_acc4.jpg", name: "하네스", price: "7,000원", seller: "산책좋아" },
    { image: "./images/Product/dog_house4.jpg", name: "집", price: "40,000원", seller: "포근해" },
    { image: "images/Product/cat_scratcher1.jpg", name: "더블캣라운지", price: "40,000원", seller: "네꼬모리" },
    { image: "./images/Product/dog_food1.jpg", name: "양치간식", price: "20,000원", seller: "그리니스" },
    { image: "./images/Product/dog_toy1.jpg", name: "말장난감", price: "3,000원", seller: "말" },
    { image: "./images/Product/dog_house1.jpg", name: "집", price: "40,000원", seller: "아늑해" },
  ];

  return (
    <div>
      <h2 className='product-title'>지금 구매하면 사은품이 와르르🎁</h2>
      <div class='ParentProduct4'>
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
          {product3.map((product3, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div id='product-list'>
                  <ProductItem image={`${product3.image}`} name={product3.name} price={product3.price} seller={product3.seller} />
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
