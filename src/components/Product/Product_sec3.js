import React from "react";
import "./Product_sec3.css";
import ProductItem from "./ProductItem";

function Product_sec2() {
    return (
        <div>
            <h3 className="product-title">후기 1,000개 돌파 상품⭐</h3>
            <div id="product-list">
                <ProductItem img='./images/Product/pet_toy3.jpg' name='바나나장난감' price='10,000원' seller='바나나' />
                <ProductItem img='./images/Product/pet_food3.jpg' name='개껌' price='25,000원' seller='네추럴코어' />
                <ProductItem img='./images/Product/pet_house3.jpg' name='집' price='40,000원' seller='아늑해' />
                <ProductItem img='./images/Product/pet_acc3.png' name='목줄' price='7,000원' seller='안전하개' />
            </div>
        </div>
    );
}

export default Product_sec2;
