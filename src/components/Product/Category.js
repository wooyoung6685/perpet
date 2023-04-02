import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/constants";
import ProductItem from "./ProductItem";
import "./Category.css";

function Category() {
  const [categoryItem, setCategoryItem] = useState(null);
  const { category } = useParams();
  console.log("category", category);
  const getCategory = () => {
    axios
      .get(`${API_URL}/products/category/${category}`)
      .then((result) => {
        setCategoryItem(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(categoryItem);
  useEffect(() => {
    getCategory();
  }, []);
  if (categoryItem == null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }
  return (
    <div className='product-category'>
      {categoryItem.map((el, idx) => {
        console.log("el:", el);
        return (
          <div id='product-list'>
            <ProductItem id={el.id} image={`${API_URL}/${el.image}`} name={el.name} price={el.orgPrice} seller={el.seller} soldout={el.soldout} />
          </div>
        );
      })}
    </div>
  );
}

export default Category;
