import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Upload, Divider, InputNumber, message, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { API_URL } from "../../config/constants.js";
import axios from "axios";
import Checkbox from "./Checkbox";
import "./UploadPage.css";

function UploadPage() {
  const { TextArea } = Input;
  const [disChecked, setDischecked] = React.useState(false);
  const [imageUrl, setImageUrl] = useState(0);
  const [category, setCategory] = useState(0);

  const [discount, setDiscount] = useState(null);
  const [orgPrice, setOrgPrice] = useState(0);
  const [price, setPrice] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (disChecked && discount) {
      setPrice(Math.round((orgPrice - orgPrice * (discount / 100)) / 100) * 100);
    }
  }, [disChecked,discount,orgPrice]);

  const onFinish = (val) => {
    axios
      .post(`${API_URL}/products`, {
        name: val.name,
        orgPrice: val.orgPrice,
        image: imageUrl,
        seller: val.seller,
        description: val.description,
        discount: discount,
        price: price,
        category: category,
      })
      .then((result) => {
        console.log(result);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        message.error("에러가 발생하였습니다!");
      });
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.image;
      setImageUrl(imageUrl);
    }
  };
  const handleChange = (value) => {
    setCategory(value);
  };
  return (
    <div id='upload-container'>
      <Form name='uploadForm' onFinish={onFinish}>
        <Form.Item name='upload' valuePropName='image' className='upload-form'>
          <Upload name='image' action={`${API_URL}/image`} listType='picture' showUploadList={false} onChange={onChangeImage}>
            {imageUrl ? (
              <img id='upload-img' src={`${API_URL}/${imageUrl}`} alt='' />
            ) : (
              <div id='upload-img-placeholder'>
                <InboxOutlined style={{ fontSize: "10em", color: "#ff4d4f" }} />
                <span>이미지를 업로드 해주세요</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className='upload-label'>상품명</span>} name='name' rules={[{ required: true, message: "상품명은 필수 입력 사항입니다." }]}>
          <Input className='upload-name' placeholder='상품명을 입력해주세요' size='large' />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className='upload-price'>판매가</span>} name='orgPrice' rules={[{ required: true, message: "판매가는 필수 입력 사항입니다." }]} initialValue={0}>
          <InputNumber
            className='upload-price'
            size='large'
            min={0}
            onChange={(e) => {
              setOrgPrice(e);
            }}
          />
        </Form.Item>
        {disChecked ? (
          <Form.Item label={<span className='upload-label'>할인율</span>} name='discount'>
            <InputNumber
              className='upload-discount'
              size='large'
              min={0}
              max={100}
              onChange={(e) => {
                setDiscount(e);
              }}
            />
          </Form.Item>
        ) : (
          <div></div>
        )}
        {disChecked ? (
          <Form.Item label={<span className='upload-label'>할인가</span>} name='price'>
            <InputNumber value={price} className='upload-price' size='large' placeholder={price} readOnly />
          </Form.Item>
        ) : (
          <div></div>
        )}
        <Checkbox checked={disChecked} onChange={setDischecked}>
          할인적용
        </Checkbox>
        <Divider></Divider>
        <Form.Item label={<span className='upload-label'>판매자명</span>} name='seller' rules={[{ required: true, message: "판매자명은 필수 입력 사항입니다." }]}>
          <Input className='upload-seller' placeholder='판매자명을 입력해주세요' size='large' />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className='upload-label'>상품설명</span>} name='description' rules={[{ required: true, message: "상품설명은 필수 입력 사항입니다." }]}>
          <TextArea size='large' id='product-description' showCount maxLength={300} placeholder='상품설명을 작성해주세요'></TextArea>
        </Form.Item>

        <Form.Item label={<span className='upload-label'>카테고리</span>} rules={[{ required: true, message: "카테고리 선택은 필수 입니다." }]}>
          <Select
            defaultValue='카테고리'
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "food",
                label: "사료",
              },
              {
                value: "snack",
                label: "간식",
              },
              {
                value: "healthcare",
                label: "건강관리",
              },
              {
                value: "hygiene",
                label: "위생",
              },
              {
                value: "beauty",
                label: "미용",
              },
              {
                value: "feeder",
                label: "급식기",
              },
              {
                value: "house",
                label: "하우스",
              },
              {
                value: "scratch",
                label: "스크래쳐",
              },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button id='submit-button' htmlType='submit'>
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
