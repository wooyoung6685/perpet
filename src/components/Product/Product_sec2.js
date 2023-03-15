import React from "react";
import "./Product_sec2.css";
import ProductItem from "./ProductItem";
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Product_sec2() {
    return (
        <div>
            <h2 className="product-title">이 상품 어때❔</h2>
            <div className="swiper">
                <Button className="left_button" size="large" shape="circle" icon={<DoubleLeftOutlined />} />
                <div id="product-list">
                    <ProductItem img='./images/Product/pet_food2.jpg' name='사료' price='25,000원' seller='네추럴코어' />
                    <ProductItem img='./images/Product/pet_toy2.jpg' name='당근노즈워크' price='10,000원' seller='노즈워크' />
                    <ProductItem img='./images/Product/pet_acc2.jpg' name='넥카라' price='7,000원' seller='핥지마' />
                    <ProductItem img='./images/Product/pet_house2.jpg' name='집' price='40,000원' seller='아늑해' />
                </div>
                <Button className="right_button" size="large" shape="circle" icon={<DoubleRightOutlined />} />
            </div>
        </div>
    );
}

export default Product_sec2;
