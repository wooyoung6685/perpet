# PerPet

<div align="center">
<img width="329" alt="image" src="https://user-images.githubusercontent.com/117795271/228409021-d39db6a9-7b40-4630-b779-5739818d0102.svg">

</div>

# PerPet React App v1.0

> **잇몸만개조** <br/> **개발기간: 202.03.06 ~ 2022.04.03**

## 배포 주소

> **프론트 서버** : [https://perpet.vercel.app/](https://perpet.vercel.app/)<br> **백엔드 서버** : [https://port-0-perpetserver-p8xrq2mlfc5j4rt.sel3.cloudtype.app/](https://port-0-perpetserver-p8xrq2mlfc5j4rt.sel3.cloudtype.app/products/)<br>

## 개발팀 소개

|                                                               최우영                                                               |                                                               김민규                                                               |                                                              박천주                                                               |                                                              이윤재                                                               |
| :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| <img width="160px" src="https://user-images.githubusercontent.com/117795271/228415574-eef39d30-f076-4218-abe9-fe801d224e1a.jpg" /> | <img width="160px" src="https://user-images.githubusercontent.com/117795271/228415637-bca17c0c-81c8-48c5-b97c-e691a47d76c6.jpg" /> | <img width="160px" src="https://user-images.githubusercontent.com/117795271/228415794-5d11dd8d-b068-4af8-a527-662ef4226bf1.jpg"/> | <img width="160px" src="https://user-images.githubusercontent.com/117795271/228415846-b1e87f83-8e85-490f-b672-cfecee4943b6.jpg"/> |
|                                          [@wooyoung6685](https://github.com/wooyoung6685)                                          |                                                 [@m9](https://github.com/Min9yuuu)                                                 |                                           [parkcheonju](https://github.com/parkcheonju)                                           |                                        [@davidcool0117](https://github.com/davidcool0117)                                         |
|                                                       wooyoung6685@gmail.com                                                       |                                                         9yu6820@gmail.com                                                          |                                                         cjswne@gmail.com                                                          |                                                      davidcool0117@gmail.com                                                      |

## 프로젝트 소개

반려동물의 건강과 행복을 위해 필요한 다양한 용품을 판매하는 것이 목적입니다. 반려동물에 대한 정보를 제공하여, 반려인들이 반려동물을 키우는데 도움을 줄 수 있습니다. perpet은 신뢰를 바탕으로 상품 선정을 하여 최상의 상품을 제공합니다.

## 시작 가이드

### Requirements

For building and running the application you need:

### Installation

[![React Version][react-v-image]][react-url] [![Node Version][node-v-image]][node-url] ![Express][express-v-image] ![Sequlize][sequelize-image] ![Swiper][swiper-v-image] ![Antd Version][antd-v-image] [![Npm version][npm-v-image]][npm-url] ![Sqlite][sqlite3]

#### Frontend

```bash
$ git clone https://github.com/wooyoung6685/perpet.git
$ cd perpet
```

```bash
$ npx create-react-app .
$ npm i react-router-dom
$ npm i axios
$ npm i swiper
$ npm i antd
$ npm i dayjs
$ npm start
```

### Backend

```bash
$ git clone https://github.com/wooyoung6685/perpetserver.git
$ cd perpetserver
```

```bash
$ nvm use v.16.19.0
$ npm init
$ npm i cors
$ npm i express
$ npm i multer
$ npm i nodemon
$ npm i sequelize
$ npm i sqlite3
$ npm start
```

---

## Stacks 🐈

### Environment

![Visual Studio Code][vscode-image] ![Git][git-image]

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Javascript][javascript-image] ![Nodejs][node-image] ![Express][express-image] ![CSS 3][css-image] ![Swiper][swiper-image] ![AntDesign][antd-image]

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white) ![Github][github-image] ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

---

## 화면 구성 📺

|                                                           메인 페이지                                                           |                                                         상품구성 페이지                                                         |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img width="329" src="https://user-images.githubusercontent.com/117795271/228436266-adaf0e52-fe26-475b-9dfa-d46957b16833.PNG"/> | <img width="329" src="https://user-images.githubusercontent.com/117795271/228436574-5ee5bda8-001b-40ec-9fb0-1393ee56d847.PNG"/> |
|                                                         상품등록 페이지                                                         |                                                         상세상품 페이지                                                         |
| <img width="329" src="https://user-images.githubusercontent.com/117795271/228436930-d98ff56a-99ed-4557-b69e-74ec1bac6a27.PNG"/> | <img width="329" src="https://user-images.githubusercontent.com/117795271/228437115-7bbce6c4-d613-48d4-9883-6931251b3e0f.PNG"/> |

---

## 주요 기능 📦

### ⭐️ 상품 업로드

- 상품을 등록하며 할인율 입력시 할인가 자동변경
- 할인가가 있을 경우 할인가 상품목록 구역에 업로드

### ⭐️ 상세페이지

- 아이템 클릭시 상세페이지로 이동하여 이미지와 상품에 대한 설명이 나오는 상세페이지 화면 렌더링

### ⭐️ 결재기능

- 결재 버튼 클릭시 메인페이지 렌더, 결재된 상품 soldout

<!-- Markdown link & img dfn's -->

<!-- plugin and version -->

[react-v-image]: https://img.shields.io/badge/react-v18-61DAFB
[node-v-image]: https://img.shields.io/badge/node-v16.19.0-brighgreen
[npm-v-image]: https://img.shields.io/badge/npm-v8.19.3-red
[axios-v-image]: https://img.shields.io/badge/axios-v1.3.4-blueviolet
[antd-v-image]: https://img.shields.io/badge/antd-v5.3.1-informational
[swiper-v-image]: https://img.shields.io/badge/swiper-v9.1.1-blue
[express-v-image]: https://img.shields.io/badge/express-v4.18.2-black
[sqlite3]: https://img.shields.io/badge/sqlite-v5.1.6-yellowgreen
[sequelize-image]: https://img.shields.io/badge/sequelize-v6.29.3-2E3B69

<!-- program -->

[node-image]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[npm-image]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[react-image]: https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react&logoColor=61DAFB
[css-image]: https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white
[vscode-image]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white
[git-image]: https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white
[github-image]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white
[antd-image]: https://img.shields.io/badge/antd-blue?style=for-the-badge&logo=antdesign&logoColor=white
[javascript-image]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[express-image]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[node-url]: https://www.npmjs.com/package/node/v/16.19.0
[npm-url]: https://www.npmjs.com/package/npm/v/8.19.3
[react-url]: https://www.npmjs.com/package/react
[swiper-image]: https://img.shields.io/badge/Swiper-0080ff?style=for-the-badge&logo=swiper&logoColor=white
