import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/constants";
import axios from "axios";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);
  if (product == null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <img src={`${API_URL}/${product.image}`} />
      <div>{product.seller}</div>
      <div>{product.orgPrice}</div>
      <div>{product.name}</div>
    </div>
  );
};
export default Products;
