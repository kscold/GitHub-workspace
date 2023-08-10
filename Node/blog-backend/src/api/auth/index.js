// src/api/auth/index.js
import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

auth.get('/log-time', authCtrl.getLogoutTime); // 로그인 로그아웃 시간을 가져오는 엔드포인트 추가

export default auth;
