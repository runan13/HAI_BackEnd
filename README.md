# HAI-BackEnd

HAI Final Project Back End API

> "인공지능 기반 개인용 혈압 모니터링 시스템"에서 사용할 웹 서버의 Back-end로 **Node JS**를 기반으로 **Apollo Server**를 사용해 GraphQL API 서버를 구성하였고, **Axios**를 사용해 원격지 하드웨어 장치에서 제공하는 JSON 파일을 파싱해온다. 모든 데이터는 **PostgreSQL**에 저장되고, **Prisma ORM**을 통해 DB와 소통을 진행하였다.

Heroku 무료 호스팅을 사용해 배포중이고, Heroku Postgres DB를 사용중이다.

![스크린샷 2021-08-20 14.20.39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b9f1318-3af9-4a03-be5b-29933e8340e6/스크린샷_2021-08-20_14.20.39.png)

---

### 프로젝트 타입

---

Team Project, Back-End API

### 기술 스택

---

Apollo Server, Express, GraphQL, Axios, Prism, JWT, bcrypt

### Project Context

---

**Timeline:**  2021-02-02 ~ 2021-04-06

---

## User:

- [x] Create Account
- [x] see Profile
- [x] Login
- [x] Edit Profile
- [x] Change Avatar (Image Upload)
- [x] Follow User
- [x] Unfollow User
- [x] see Followers
- [x] see Followings
- [x] Computed Fields
- [x] Search Users

## SpO2: 

- [x] upload SpO2
- [x] see SpO2
- [x] see Hashtags
- [x] delect SpO2
- [x] See Feed (home SpO2 card)
- [x] isMine (Delete SpO2)

## comment:
- [x] Comment on Photo
- [x] isMine (Delete Comment)
- [x] Edit Comment

## AWS S3 Upload:
- [x] AWS S3 Image Upload

## Direct Messages (제거 예정)
- [x] See Rooms
- [x] Send Message (Create Room)
- [x] See Room
- [x] Computed Fields
- [x] Realtime Messages

