# PerPet

<div align="center">
<img width="329" alt="image" src="https://user-images.githubusercontent.com/117795271/228409021-d39db6a9-7b40-4630-b779-5739818d0102.svg">

</div>

# PerPet React App v1.0

> **그린컴퓨터학원 잇몸만개조** <br/> **개발기간: 202.03.06 ~ 2022.04.03**

## 배포 주소

> **프론트 서버** : [https://perpet.vercel.app/](https://perpet.vercel.app/)<br> **백엔드 서버** : [https://port-0-perpetserver-p8xrq2mlfc5j4rt.sel3.cloudtype.app/](https://port-0-perpetserver-p8xrq2mlfc5j4rt.sel3.cloudtype.app/)<br>

## 웹개발팀 소개

|                                                              최우영                                                               |                                                              김민규                                                               |                                                              박천주                                                              |         이윤재         |
| :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :--------------------: |
| <img width="160px" src="https://user-images.githubusercontent.com/50205887/205326013-af001243-a77d-4601-8bfc-aa713931cf95.png" /> | <img width="160px" src="https://user-images.githubusercontent.com/50205887/207570536-f5a82e48-99a1-4399-91d3-75fc5f8f3349.png" /> | <img width="160px" src="https://user-images.githubusercontent.com/50205887/207570634-247c3715-a54e-4f63-8c08-9b266f8a35f7.png"/> | ㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁ |
|                                             [@parkjiye](https://github.com/parkjiye)                                              |                                          [@ChaeyeonSeo](https://github.com/ChaeyeonSeo)                                           |                                         [@hyunjeong408](https://github.com/hyunjeong408)                                         |
|                                                 성균관대학교 소프트웨어학과 4학년                                                 |                                                 성균관대학교 소프트웨어학과 4학년                                                 |                                                성균관대학교 소프트웨어학과 4학년                                                 |

## 프로젝트 소개

발룬테인은 온라인 코딩 교육 봉사를 하는 단체입니다. 기존에 소프트웨어학과에서 월드프렌즈 ICT 봉사단이라는 개발도상국에서 약 학 달 간 코딩 교육 봉사를 하는 활동이 있었는데, 봉사가 일회성으로 끝나는 점에 아쉬움을 느껴 지속적인 봉사를 하고자 만들어졌습니다. 발룬테인에서는 스크래치, 파이썬 등 프로그래밍 언어에 관한 강의를 제공하고, 질의응답과 라이브 세션을 통해 한국 학생과 외국 학생 간에 소통이 이루어집니다.

#### Voluntain will share the knowledge of programming.

You can take easy-to-understand lectures created by our team, including Scratch and Python. Also, improve your understanding and application skills of programming with exercise questions in the lecture videos.

#### Voluntain's website will give you a learning-friendly environment.

Our website supports the following component.

1. Various online lectures with detailed descriptions and exercise questions.
2. Q&A section to ask questions freely.
3. Function to check the lecture you watched recently.

## 시작 가이드

### Requirements

For building and running the application you need:

[![React Version][react-v-image]][react-url]
[![Node Version][node-v-image]][node-url]
[![Npm version][npm-v-image]][npm-url]

### Installation

#### Backend

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

#### Frontend

```bash
$ nvm use v.16.19.0
$ npx create-react-app .
$ npm i axios
$ npm i dayjs
$ npm i react-router-dom
$ npm i swiper
$ npm i antd
$ npm start
```

---

## Stacks 🐈

### Environment

![Visual Studio Code][vscode-image]
![Git][git-image]

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Nodejs][node-image]
![CSS 3][css-image]

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Github][github-image]
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

---

## 화면 구성 📺

|                                                          메인 페이지                                                           |                                                          소개 페이지                                                           |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img width="329" src="https://user-images.githubusercontent.com/50205887/208036155-a57900f7-c68a-470d-923c-ff3c296ea635.png"/> | <img width="329" src="https://user-images.githubusercontent.com/50205887/208036645-a76cf400-85bc-4fa2-af72-86d2abf61366.png"/> |
|                                                        강좌 소개 페이지                                                        |                                                        강의 영상 페이지                                                        |
| <img width="329" src="https://user-images.githubusercontent.com/50205887/208038737-2b32b7d2-25f4-4949-baf5-83b5c02915a3.png"/> | <img width="329" src="https://user-images.githubusercontent.com/50205887/208038965-43a6318a-7b05-44bb-97c8-b08b0495fba7.png"/> |

---

## 주요 기능 📦

### ⭐️ 강좌 선택 및 강의 영상 시청 기능

- Scratch, Python 2개 강좌 및 각 강좌마다 10개 가량의 강의 영상 제공
- 추후 지속적으로 강좌 추가 및 업로드 예정

### ⭐️ 강의 관련 및 단체에 대한 자유로운 댓글 작성 가능

- Disqus를 이용하여 강의 관련 질문이나 단체에 대한 질문 작성 가능

### ⭐️ 이어 학습하기 기능

- Cookie 기능을 이용하여 이전에 학습했던 내용 이후부터 바로 학습 가능

<!-- Markdown link & img dfn's -->

<!-- plugin and version -->

[react-v-image]: https://img.shields.io/badge/react-v18-blue
[node-v-image]: https://img.shields.io/badge/node-v16.19.0-brighgreen
[npm-v-image]: https://img.shields.io/badge/npm-v8.19.3-red

<!-- program -->

[node-image]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[npm-image]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[react-image]: https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react&logoColor=61DAFB
[css-image]: https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white
[vscode-image]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white
[git-image]: https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white
[github-image]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white
[css-url]: https://developer.mozilla.org/ko/docs/Web/CSS
[node-url]: https://www.npmjs.com/package/node/v/16.19.0
[npm-url]: https://www.npmjs.com/package/npm/v/8.19.3
[react-url]: https://www.npmjs.com/package/react
[vscode-url]: https://code.visualstudio.com/docs
[git-url]: https://git-scm.com/docs/git
[github-url]: https://github.com/
