import React from "react";
import "./ProductSec3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function ProductSec3() {
  const product2 = [
    { image: "images/Product/cat_snack2.png", name: "참치 츄르", price: "6,000", seller: "이나바" },
    { image: "images/Product/dog_food3.jpg", name: "개껌", price: "25,000", seller: "네추럴코어" },
    { image: "images/Product/dog_house3.jpg", name: "집", price: "40,000", seller: "아늑해" },
    { image: "images/Product/cat_snack1.jpg", name: "캔간식", price: "48,000", seller: "굿프랜드" },
    { image: "images/Product/dog_food4.jpg", name: "양치간식", price: "25,000", seller: "덴티페어리" },
    { image: "images/Product/dog_toy4.png", name: "장난감", price: "10,000", seller: "그루비볼" },
    { image: "images/Product/cat_scratcher4.jpg", name: "스크래쳐 하우스", price: "25,000", seller: "도트캣" },
    { image: "images/Product/dog_house4.jpg", name: "집", price: "40,000", seller: "포근해" },
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

export default ProductSec3;
