// src/api/auth/auth.ctrl.js
import Joi from 'joi';
import User from '../../models/user';

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
    // check if username already exists
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    await user.setPassword(password);
    await user.save();

    const loginTime = new Date();
    user.loginTime = loginTime;
    await user.save();

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
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
