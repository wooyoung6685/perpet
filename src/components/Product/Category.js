import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/constants";

function Category() {
  const [category, setCategory] = useState(null);
  const getCategory = () => {
    axios
      .get(`${API_URL}/products/category`)
      .then((result) => {
        setCategory(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);
  if (category == null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }
  return (
    <div>
      {category.map((el, idx) => {
        <div key={idx}>{el.name}</div>;
      })}
    </div>
  );
}

export default Category;
