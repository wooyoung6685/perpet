import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductSec1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { API_URL } from "../../config/constants";

function ProductSec1() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    let url = `${API_URL}/products`;
    axios
      .get(url)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (product == null) {
    return <h2 className='product-title'>상품정보를 받고 있습니다...</h2>;
  }

  return (
    <div>
      <h2 className='product-title'>핫딜상품🔥</h2>
      <div class='ParentProduct1'>
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
          {product.map((hotdealItem, idx) => {
            if (hotdealItem.discount) {
              return (
                <SwiperSlide key={idx}>
<<<<<<< HEAD
                  <div id="product-list">
                    <div className="hotdeal">
=======
                  <div id='product-list'>
                    <div className='hotdeal'>
>>>>>>> ff5c7b241b7206e7d60ed09ef7ac615a356789c2
                      <ProductItem id={hotdealItem.id} image={`${API_URL}/${hotdealItem.image}`} name={hotdealItem.name} orgPrice={`${hotdealItem.orgPrice}원`} discount={`${hotdealItem.discount}%`} price={hotdealItem.price} seller={hotdealItem.seller} soldout={hotdealItem.soldout} />
                    </div>
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

export default ProductSec1;
