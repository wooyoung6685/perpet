import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product_sec2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { API_URL } from "../../config/constants";

function Product_sec2() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    let url = `${API_URL}/suggest`;
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
          {product.map((product1, idx) => {
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
