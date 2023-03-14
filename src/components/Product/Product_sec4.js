import React from "react";
import "./Product_sec4.css";
import ProductItem from "./ProductItem";

function Product_sec2() {
    return (
        <div>
            <h3 className="product-title">지금 구매하면 사은품이 와르르🎁</h3>
            <div id="product-list">
                <ProductItem img='./images/Product/pet_food4.jpg' name='양치간식' price='25,000원' seller='덴티페어리' />
                <ProductItem img='./images/Product/pet_toy4.png' name='장난감' price='10,000원' seller='그루비볼' />
                <ProductItem img='./images/Product/pet_acc4.jpg' name='하네스' price='7,000원' seller='산책좋아' />
                <ProductItem img='./images/Product/pet_house4.jpg' name='집' price='40,000원' seller='포근해' />
            </div>
        </div>
    );
}

export default Product_sec2;
