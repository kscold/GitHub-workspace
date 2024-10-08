// src/api/auth/auth.ctrl.js
import jwt from 'jsonwebtoken'; // 토큰 생성을 위한 jwt 모듈 import
import Joi from 'joi';
import User from '../../models/user';
import axios from 'axios';

// POST /api/auth/register
export const register = async (ctx) => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    // 객체를 만들고, keys({...})를 사용하여 새 스키마를 정의
    username: Joi.string() // 값이 문자열인지 확인
      .alphanum() // 문자열에 영숫자 문자(문자 및 숫자)만 포함되어야 합니다.
      .min(3) // 문자열이 최소 3자 길이여야 함을 지정
      .max(20) // 문자열의 최대 길이가 20자여야 함을 지정
      .required(), // 입력 개체에 필드가 있고 비어 있지 않은지 확인
    password: Joi.string() // 값이 문자열인지 확인
      .required(), // 입력 개테에 필드가 있고 비어 있진 않은지 확인
  });
  const result = schema.validate(ctx.request.body); // POST 요청을 보낼 때 요청 본문 데이터의 유효성을 검사하는데 사용
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username); // 같은 User 이름으로 요청을 보냈을 때 위와 같이 에러가 발생
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      username,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      // 쿠키 설정을 함
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

// POST /api/auth/login
export const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  // username, password가 없으면 에러 처리
  if (!username || !password) {
    ctx.status = 401; // Unautorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않으면 에러 처리
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET /api/auth/check
export const check = async (ctx) => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인 중 아님
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

// POST /api/auth/logout
export const logout = async (ctx) => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content
};

// Kakao Login handling
export const kakaoLogin = async (ctx) => {
  const { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } = process.env;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}/kakao/callback&response_type=code`;

  ctx.body = { url: kakaoAuthUrl };
};

// 카카오 로그인 콜백 처리
export const kakaoCallback = async (ctx) => {
  const { code } = ctx.query;

  try {
    const { KAKAO_CLIENT_ID, KAKAO_CLIENT_SECRET, KAKAO_REDIRECT_URI } =
      process.env;
    const response = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: KAKAO_CLIENT_ID,
        client_secret: KAKAO_CLIENT_SECRET,
        redirect_uri: KAKAO_REDIRECT_URI,
        code,
      },
      {
        withCredentials: true,
      },
    );

    const { access_token } = response.data;
    const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const kakaoId = userResponse.data.id.toString();
    let user = await User.findOne({ kakaoId });

    if (!user) {
      user = new User({
        kakaoId,
      });
      await user.save();
    }

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });

    ctx.redirect('/'); // 로그인 후 리다이렉트할 경로
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 백엔드에서 토큰을 받아오기 위한 엔드포인트
export const kakaoBackendToken = async (ctx) => {
  const { code } = ctx.query;

  try {
    const { KAKAO_CLIENT_ID, KAKAO_CLIENT_SECRET, KAKAO_REDIRECT_URI } =
      process.env;
    const response = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: KAKAO_CLIENT_ID,
        client_secret: KAKAO_CLIENT_SECRET,
        redirect_uri: `${KAKAO_REDIRECT_URI}/kakao/callback`,
        code,
      },
      {
        withCredentials: true,
      },
    );

    const { access_token } = response.data;

    // 토큰을 프론트엔드로 전송
    ctx.body = { access_token };
  } catch (e) {
    ctx.throw(500, e);
  }
};
