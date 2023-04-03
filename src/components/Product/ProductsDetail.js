import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/constants";
import axios from "axios";
import "./ProductsDetail.css";
import { Button, message } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ProductsDetail = () => {
  const navigate = useNavigate();
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

  const onClickPurchase = () => {
    axios
      .post(`${API_URL}/purchase/${id}`)
      .then((result) => {
        console.log(result);
        message.info("결제가 완료되었습니다!");
        navigate("/", { replace: true });
        getProduct();
      })
      .catch((error) => {
        console.log(error);
        message.error(`에러발생 ${error.message}`);
      });
  };

  return (
    <div className="Product_detail">
      <div id="image-box" className="hotdeal">
        <img src={`${API_URL}/${product.image}`} alt={product.name} />
      </div>
      <div className="Product_content">
        <div id="profile-box">
          <div className="product-seller">{product.seller}</div>
        </div>
        <div className="content-box">
          <div id="name">{product.name}</div>
          <div id="price">
            {product.discount ? <span className="discount">{`${product.discount}%`}</span> : <span></span>}
            {product.discount ? <span className="orgPrice">&nbsp;{product.orgPrice}원</span> : <span></span>}
            {product.discount ? <div className="price">{product.price}원</div> : <div className="price">{product.orgPrice}원</div>}
          </div>
          <div id="createdAt">상품등록일: {dayjs(product.createdAt).format("YY년MM월DD일")}</div>
          <div id="description">
            <h2>상품설명</h2>
            {product.description}
          </div>
        </div>
        <Button size="large" type="primary" danger={true} className="purchase" onClick={onClickPurchase} disabled={product.soldout === 1}>
          즉시 결제하기
        </Button>
      </div>
    </div>
  );
};
export default ProductsDetail;
