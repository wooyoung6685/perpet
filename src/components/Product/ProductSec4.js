import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductSec4.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { API_URL } from "../../config/constants";

function ProductSec4() {
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
  }, [product]);
  if (product == null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <h2 className='product-title'>지금 구매하면 사은품이 와르르🎁</h2>
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
          {product.map((product1, idx) => {
            if (!product1.discount && 16<=idx) {
              return (
                <SwiperSlide key={idx}>
                  <div id='product-list'>
                    <ProductItem id={product1.id} image={`${API_URL}/${product1.image}`} name={product1.name} price={product1.orgPrice} seller={product1.seller} soldout={product1.soldout} />
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

export default ProductSec4;
