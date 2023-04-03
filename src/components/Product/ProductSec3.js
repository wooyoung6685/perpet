import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductSec3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { API_URL } from "../../config/constants";

function ProductSec3() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    let url = `${API_URL}/products`;
    axios
      .get(url)
      .then((result) => {
        console.log(result);
        setProduct(result.data.product);
        console.log(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (product == null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <h2 className='product-title'>후기 1,000개 돌파 상품⭐</h2>
      <div className='ParentProduct2'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className='Product_slide1'
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1150: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {product.map((product3, idx) => {
            if (!product3.discount && idx > 8) {
              return (
                <SwiperSlide key={idx}>
                  <div id='product-list'>
                    <ProductItem id={product3.id} image={`${API_URL}/${product3.image}`} name={product3.name} price={product3.orgPrice} seller={product3.seller} soldout={product3.soldout} />
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSec3;
