import React from "react";
import "./Product_sec1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Product_sec1() {
  const hotdeal = [
    {
      image: "./images/Product/pet_acc1.png",
      name: "하네스",
      price: "18,000원",
      orgPrice: "38,000원",
      discount: "53%",
      seller: "펫베오",
    },
    {
      image: "./images/Product/pet_food1.jpg",
      name: "양치간식",
      price: "24,900원",
      orgPrice: "49,900원",
      discount: "50%",
      seller: "그리니스",
    },
    {
      image: "./images/Product/pet_toy1.jpg",
      name: "말장난감",
      price: "9,000원",
      orgPrice: "5,300원",
      discount: "41%",
      seller: "말",
    },
    {
      image: "./images/Product/pet_house1.jpg",
      name: "집",
      orgPrice: "40,000원",
      price: "32,000원",
      discount: "20% ",
      seller: "아늑해",
    },
    {
      image: "",
      name: "",
      price: "",
      orgPrice: "",
      discount: "",
      seller: "",
    },
    {
      image: "",
      name: "",
      price: "",
      orgPrice: "",
      discount: "",
      seller: "",
    },
    {
      image: "",
      name: "",
      price: "",
      orgPrice: "",
      discount: "",
      seller: "",
    },
    {
      image: "",
      name: "",
      price: "",
      orgPrice: "",
      discount: "",
      seller: "",
    },
    {
      image: "",
      name: "",
      price: "",
      orgPrice: "",
      discount: "",
      seller: "",
    },
    {
      image: "",
      name: "",
      price: "",
      orgPrice: "",
      discount: "",
      seller: "",
    },
    {
      image: "",
      name: "",
      price: "",
      orgPrice: "",
      discount: "",
      seller: "",
    },
    {
      image: "",
      name: "",
      price: "",
      orgPrice: "",
      discount: "",
      seller: "",
    },
  ];
  return (
    <div>
      <h2 className='product-title'>핫딜상품🔥</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className='Product_slide'
      >
        <SwiperSlide>
          <div id='product-list'>
            <div className='hotdeal'>
              <ProductItem image='./images/Product/pet_acc1.png' name='하네스' orgPrice='38,000원' discount='53% ' price='18,000원' seller='펫베오' />
            </div>
            <div className='hotdeal'>
              <ProductItem image='./images/Product/pet_food1.jpg' name='양치간식' orgPrice='49,900원' discount='50% ' price='24,900원' seller='그리니스' />
            </div>
            <div className='hotdeal'>
              <ProductItem image='./images/Product/pet_toy1.jpg' name='말장난감' orgPrice='9,000원' discount='41% ' price='5,300원' seller='말' />
            </div>
            <div className='hotdeal'>
              <ProductItem image='./images/Product/pet_house1.jpg' name='집' orgPrice='40,000원' discount='20% ' price='32,000원' seller='아늑해' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='product-list'>
            <ProductItem image='./images/Product/pet_food2.jpg' name='사료' orgPrice='25,000원' price='25,000원' discount='50%' seller='네추럴코어' />
            <ProductItem image='./images/Product/pet_toy2.jpg' name='당근노즈워크' orgPrice='12,500원' price='10,000원' discount='50%' seller='노즈워크' />
            <ProductItem image='./images/Product/pet_acc2.jpg' name='넥카라' orgPrice='3,500원' price='7,000원' discount='50%' seller='핥지마' />
            <ProductItem image='./images/Product/pet_house2.jpg' name='집' orgPrice='20,000원' price='40,000원' discount='50%' seller='아늑해' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='product-list'>
            <ProductItem image='./images/Product/pet_toy3.jpg' name='바나나장난감' price='10,000원' seller='바나나' />
            <ProductItem image='./images/Product/pet_food3.jpg' name='개껌' price='25,000원' seller='네추럴코어' />
            <ProductItem image='./images/Product/pet_house3.jpg' name='집' price='40,000원' seller='아늑해' />
            <ProductItem image='./images/Product/pet_acc3.png' name='목줄' price='7,000원' seller='안전하개' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='product-list'>
            <ProductItem image='./images/Product/pet_food4.jpg' name='양치간식' price='25,000원' seller='덴티페어리' />
            <ProductItem image='./images/Product/pet_toy4.png' name='장난감' price='10,000원' seller='그루비볼' />
            <ProductItem image='./images/Product/pet_acc4.jpg' name='하네스' price='7,000원' seller='산책좋아' />
            <ProductItem image='./images/Product/pet_house4.jpg' name='집' price='40,000원' seller='포근해' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Product_sec1;
