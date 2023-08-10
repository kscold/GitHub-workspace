// src/main.js
require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import cors from '@koa/cors'; // Import the koa2-cors middleware

import api from './api';
// import createFakeData from './createFakeData';
import jwtMiddleware from './lib/jwtMiddleware';

// 비구조화 할당을 통해 process.env 내부 갑에 대한 래퍼런스 만들기
const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // createFakeData();
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa(); // new 영역에 객체를 할당 객체를 초기화함
const router = new Router();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
); // CORS

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());
app.use(jwtMiddleware);

router.get('/api/auth/kakao/backend-token', async (ctx) => {
  try {
    const code = ctx.query.code;
    const response = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      `grant_type=authorization_code&client_id=${YOUR_CLIENT_ID}&redirect_uri=http://localhost:4000/api/auth/kakao/callback&code=${code}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );

    const accessToken = response.data.access_token;
    ctx.body = { access_token: accessToken };
  } catch (error) {
    console.error('액세스 토큰을 가져오는 중에 오류 발생:', error);
    ctx.status = 500;
    ctx.body = { error: '액세스 토큰을 가져오는 중에 오류 발생' };
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('서버가 4000 포트에서 실행 중입니다.');
});
