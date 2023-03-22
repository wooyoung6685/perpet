import React from 'react'
import { Form, Input, Button, Upload, Divider, InputNumber } from "antd";
import './UploadPage.css'

function UploadPage() {
  const { TextArea } = Input;
  return (
    <div id="upload-container">
      <Form name="uploadForm">
        <Form.Item name="upload" valuePropName="image">
          <Upload name="image" action={`/image`} listType="picture" showUploadList={false}>
            <div id="upload-img-placeholder">
              <img src="../images/Upload/camera.png" alt="" />
              <span>이미지를 업로드 해주세요</span>
            </div>
          </Upload>
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className="upload-label">상품명</span>} name="name" rules={[{ required: true, message: "상품명은 필수 입력 사항입니다." }]}>
          <Input className="upload-name" placeholder="상품명을 입력해주세요" size="large" />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className="upload-price">판매가</span>} name="price" rules={[{ required: true, message: "판매가는 필수 입력 사항입니다." }]} initialValue={0}>
          <InputNumber className="upload-price" size="large" min={0} />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className="upload-label">판매자명</span>} name="seller" rules={[{ required: true, message: "판매자명은 필수 입력 사항입니다." }]}>
          <Input className="upload-seller" placeholder="판매자명을 입력해주세요" size="large" />
        </Form.Item>
        <Divider></Divider>
        <Form.Item label={<span className="upload-label">상품설명</span>} name="description" rules={[{ required: true, message: "상품설명은 필수 입력 사항입니다." }]}>
          <TextArea size="large" id="product-description" showCount maxLength={300} placeholder="상품설명을 작성해주세요"></TextArea>
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" htmlType="submit">
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>

  )
}

export default UploadPage