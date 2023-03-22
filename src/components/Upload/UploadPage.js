import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Upload, Divider, InputNumber, message } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import { API_URL } from "../../config/constants.js";
import axios from "axios";
import "./UploadPage.css";

function UploadPage() {
  const { TextArea } = Input;
  const { Dragger } = Upload;
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();
  const onFinish = (val) => {
    axios
      .post(`${API_URL}/products`, {
        name: val.name,
        price: val.price,
        orgPrice: val.orgPrice,
        discount: val.discount,
        image: val.imageUrl,
        seller: val.seller,
      })
      .then((result) => {
        console.log(result);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.error(error);
        message.error('에러가 발생하였습니다!');
      });
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };
  const props = {
    name: 'file',
    multiple: true,
    action: API_URL,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} 파일이 업로드 되었습니다`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 파일 업로드가 실패하였습니다`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <div id="upload-container">
      <Form name="uploadForm" onFinish={onFinish}>
        <Form.Item name="upload" valuePropName="image">
          <Upload name="image" action={`${API_URL}/UploadPage`} listType="picture" showUploadList={false} onChange={onChangeImage}>
            {imageUrl ? (
              <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="" />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/Upload/camera.png" alt="" />
                <span>이미지를 업로드 해주세요</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">업로드할 파일을 클릭하거나 끌어와 주세요</p>
        </Dragger>
        <Divider></Divider>
        <Form.Item label={<span className='upload-label'>상품명</span>} name='name' rules={[{ required: true, message: "상품명은 필수 입력 사항입니다." }]}>
          <Input className='upload-name' placeholder='상품명을 입력해주세요' size='large' />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className='upload-price'>판매가</span>} name='price' rules={[{ required: true, message: "판매가는 필수 입력 사항입니다." }]} initialValue={0}>
          <InputNumber className='upload-price' size='large' min={0} />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className='upload-label'>판매자명</span>} name='seller' rules={[{ required: true, message: "판매자명은 필수 입력 사항입니다." }]}>
          <Input className='upload-seller' placeholder='판매자명을 입력해주세요' size='large' />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className='upload-label'>상품설명</span>} name='description' rules={[{ required: true, message: "상품설명은 필수 입력 사항입니다." }]}>
          <TextArea size='large' id='product-description' showCount maxLength={300} placeholder='상품설명을 작성해주세요'></TextArea>
        </Form.Item>
        <Form.Item>
          <Button id='submit-button' htmlType='submit'>
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div >

  )
}

export default UploadPage;
