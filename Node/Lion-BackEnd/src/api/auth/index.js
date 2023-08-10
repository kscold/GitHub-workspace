// src/api/auth/index.js
import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

// 카카오 소셜 로그인을 위한 엔드포인트 추가
auth.get('/kakao', authCtrl.kakaoLogin); // 카카오 로그인 URL 반환
auth.get('/kakao/callback', authCtrl.kakaoCallback); // 카카오 로그인 콜백
// 백엔드 토큰 엔드포인트 추가
auth.get('/kakao/backend-token', authCtrl.kakaoBackendToken);

export default auth;
