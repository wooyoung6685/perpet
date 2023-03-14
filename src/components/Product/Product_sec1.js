import React from "react";
import "./Product_sec1.css";
import ProductItem from "./ProductItem";

function Product_sec1() {
    return (
        <div>
            <h3 className="product-title">핫딜상품🔥</h3>
            <div id="product-list">
                <ProductItem img='./images/Product/pet_acc1.png' name='하네스' price='15,000원' seller='펫베오' />
                <ProductItem img='./images/Product/pet_food1.jpg' name='양치간식' price='20,000원' seller='그리니스' />
                <ProductItem img='./images/Product/pet_toy1.jpg' name='말장난감' price='3,000원' seller='말' />
                <ProductItem img='./images/Product/pet_house1.jpg' name='집' price='40,000원' seller='아늑해' />
            </div>
        </div>
    );
}

export default Product_sec1;
