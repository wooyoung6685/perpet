import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product_sec1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

import { API_URL } from "../../config/constants";

function Product_sec1() {
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
      <h2 className='product-title'>핫딜상품🔥</h2>
      {/* <Upload {...props}>
        <Button icon={<UploadOutlined />} danger>상품 업로드</Button>
      </Upload> */}
      <div class='ParentProduct1'>
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
          {product.map((hotdealItem, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div id='product-list'>
                  <div className='hotdeal'>
                    <ProductItem image={`${hotdealItem.image}`} name={hotdealItem.name} orgPrice={hotdealItem.orgPrice} discount={hotdealItem.discount} price={hotdealItem.price} seller={hotdealItem.seller} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Product_sec1;
