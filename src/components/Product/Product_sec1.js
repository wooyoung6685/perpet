import React from "react";
import "./Product_sec1.css";
import ProductItem from "./ProductItem";
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Product_sec1() {
    return (
        <div>
            <h2 className="product-title">핫딜상품🔥</h2>
            <div id="product-list">
                <Button className="left_button" size="large" shape="circle" icon={<DoubleLeftOutlined />} />
                <ProductItem img='./images/Product/pet_acc1.png' name='하네스' price='15,000원' seller='펫베오' />
                <ProductItem img='./images/Product/pet_food1.jpg' name='양치간식' price='20,000원' seller='그리니스' />
                <ProductItem img='./images/Product/pet_toy1.jpg' name='말장난감' price='3,000원' seller='말' />
                <ProductItem img='./images/Product/pet_house1.jpg' name='집' price='40,000원' seller='아늑해' />
                <Button className="right_button" size="large" shape="circle" icon={<DoubleRightOutlined />} />
            </div>
        </div>
    );
}

export default Product_sec1;
