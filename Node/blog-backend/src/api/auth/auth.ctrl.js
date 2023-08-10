// // src/auth/auth.ctrl.js
// import Joi from 'joi';
// import User from '../../models/user';

// // POST /api/auth/register
// export const register = async (ctx) => {
//   // Request Body 검증하기
//   const schema = Joi.object().keys({
//     // 객체를 만들고, keys({...})를 사용하여 새 스키마를 정의
//     username: Joi.string() // 값이 문자열인지 확인
//       .alphanum() // 문자열에 영숫자 문자(문자 및 숫자)만 포함되어야 합니다.
//       .min(3) // 문자열이 최소 3자 길이여야 함을 지정
//       .max(20) // 문자열의 최대 길이가 20자여야 함을 지정
//       .required(), // 입력 개체에 필드가 있고 비어 있지 않은지 확인
//     password: Joi.string() // 값이 문자열인지 확인
//       .required(), // 입력 개테에 필드가 있고 비어 있진 않은지 확인
//   });
//   const result = schema.validate(ctx.request.body); // POST 요청을 보낼 때 요청 본문 데이터의 유효성을 검사하는데 사용
//   if (result.error) {
//     ctx.status = 400;
//     ctx.body = result.error;
//     return;
//   }

//   const { username, password } = ctx.request.body;
//   try {
//     // username이 이미 존재하는지 확인
//     const exists = await User.findByUsername(username); // 같은 User 이름으로 요청을 보냈을 때 위와 같이 에러가 발생
//     if (exists) {
//       ctx.status = 409; // Conflict
//       return;
//     }

//     const user = new User({
//       username,
//     });
//     await user.setPassword(password); // 비밀번호 설정
//     await user.save(); // 데이터베이스에 저장

//     ctx.body = user.serialize();

//     const token = user.generateToken();
//     ctx.cookies.set('access_token', token, {
//       // 쿠키 설정을 함
//       maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
//       httpOnly: true,
//     });
//   } catch (e) {
//     ctx.throw(500, e);
//   }
// };

// // POST /api/auth/login
// export const login = async (ctx) => {
//   const { username, password } = ctx.request.body;

//   // username, password가 없으면 에러 처리
//   if (!username || !password) {
//     ctx.status = 401; // Unautorized
//     return;
//   }

//   try {
//     const user = await User.findByUsername(username);
//     // 계정이 존재하지 않으면 에러 처리
//     if (!user) {
//       ctx.status = 401;
//       return;
//     }
//     const valid = await user.checkPassword(password);
//     // 잘못된 비밀번호
//     if (!valid) {
//       ctx.status = 401;
//       return;
//     }
//     ctx.body = user.serialize();
//     const token = user.generateToken();
//     ctx.cookies.set('access_token', token, {
//       maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
//       httpOnly: true,
//     });
//   } catch (e) {
//     ctx.throw(500, e);
//   }
// };

// // GET /api/auth/check
// export const check = async (ctx) => {
//   const { user } = ctx.state;
//   if (!user) {
//     // 로그인 중 아님
//     ctx.status = 401; // Unauthorized
//     return;
//   }
//   ctx.body = user;
// };

// // POST /api/auth/logout
// export const logout = async (ctx) => {
//   ctx.cookies.set('access_token');
//   ctx.status = 204; // No Content
// };

// // src/auth/auth.ctrl.js
// import Joi from 'joi';
// import User from '../../models/user';
// import ActivityLog from '../../models/activitylog';

// // POST /api/auth/register
// export const register = async (ctx) => {
//   // Request Body 검증하기
//   const schema = Joi.object().keys({
//     // 객체를 만들고, keys({...})를 사용하여 새 스키마를 정의
//     username: Joi.string() // 값이 문자열인지 확인
//       .alphanum() // 문자열에 영숫자 문자(문자 및 숫자)만 포함되어야 합니다.
//       .min(3) // 문자열이 최소 3자 길이여야 함을 지정
//       .max(20) // 문자열의 최대 길이가 20자여야 함을 지정
//       .required(), // 입력 개체에 필드가 있고 비어 있지 않은지 확인
//     password: Joi.string() // 값이 문자열인지 확인
//       .required(), // 입력 개테에 필드가 있고 비어 있진 않은지 확인
//   });
//   const result = schema.validate(ctx.request.body); // POST 요청을 보낼 때 요청 본문 데이터의 유효성을 검사하는데 사용
//   if (result.error) {
//     ctx.status = 400;
//     ctx.body = result.error;
//     return;
//   }

//   const { username, password } = ctx.request.body;
//   try {
//     // username이 이미 존재하는지 확인
//     const exists = await User.findByUsername(username); // 같은 User 이름으로 요청을 보냈을 때 위와 같이 에러가 발생
//     if (exists) {
//       ctx.status = 409; // Conflict
//       return;
//     }

//     const user = new User({
//       username,
//     });
//     await user.setPassword(password); // 비밀번호 설정
//     await user.save(); // 데이터베이스에 저장

//     ctx.body = user.serialize();

//     const token = user.generateToken();
//     ctx.cookies.set('access_token', token, {
//       // 쿠키 설정을 함
//       maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
//       httpOnly: true,
//     });
//   } catch (e) {
//     ctx.throw(500, e);
//   }
// };

// // POST /api/auth/login
// export const login = async (ctx) => {
//   const { username, password } = ctx.request.body;

//   // handle error if no username or password
//   if (!username || !password) {
//     ctx.status = 401; // Unauthorized
//     return;
//   }

//   try {
//     const user = await User.findByUsername(username);
//     // handle error if account does not exist
//     if (!user) {
//       ctx.status = 401;
//       return;
//     }
//     const valid = await user.checkPassword(password);
//     // wrong password
//     if (!valid) {
//       ctx.status = 401;
//       return;
//     }

//     // log-in succeed
//     ctx.status = 200;
//     ctx.body = user;

//     // Find the latest activity log for the user
//     const latestActivityLog = await ActivityLog.findOne({
//       userId: user._id,
//     }).sort({ loginTime: -1 });

//     // If no latest activity log or it already has a logoutTime, create a new activity log with the loginTime set to now
//     if (!latestActivityLog || latestActivityLog.logoutTime) {
//       const activityLog = new ActivityLog({
//         userId: user._id,
//         loginTime: new Date(),
//         logoutTime: null, // Set logout time to null
//       });
//       await activityLog.save();
//     } else {
//       // Update the existing activity log with the new login time
//       latestActivityLog.loginTime = new Date();
//       await latestActivityLog.save();
//     }
//   } catch (e) {
//     ctx.status = 500;
//     ctx.throw(e);
//   }
// };

// // GET /api/auth/check
// export const check = async (ctx) => {
//   const { user } = ctx.state;
//   if (!user) {
//     // 로그인 중 아님
//     ctx.status = 401; // Unauthorized
//     return;
//   }
//   ctx.body = user;
// };

// export const logout = async (ctx) => {
//   const { user } = ctx.state;

//   // Handle error if user does not exist
//   if (!user) {
//     ctx.status = 401; // Unauthorized
//     return;
//   }

//   // logout successful
//   ctx.status = 200;

//   // Find the latest activity log for the user
//   const latestActivityLog = await ActivityLog.findOne({
//     userId: user._id,
//   }).sort({ loginTime: -1 });

//   // Update the existing activity log with the logout time
//   if (latestActivityLog) {
//     latestActivityLog.logoutTime = new Date();
//     await latestActivityLog.save();
//   }
// };

import Joi from 'joi';
import User from '../../models/user';
import ActivityLog from '../../models/activitylog';

// POST /api/auth/register
export const register = async (ctx) => {
  // Request Body 검증
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      username,
    });
    await user.setPassword(password);
    await user.save();

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

// POST /api/auth/login
export const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  // username이나 password가 없을 때 에러 처리
  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않을 때 에러 처리
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호일 때 에러 처리
    if (!valid) {
      ctx.status = 401;
      return;
    }

    // 로그인 성공
    ctx.status = 200;
    ctx.body = user;

    // 사용자의 최신 활동 로그 찾기
    const latestActivityLog = await ActivityLog.findOne({
      userId: user._id,
    }).sort({ loginTime: -1 });

    // 최신 활동 로그가 없거나 이미 로그아웃 시간이 있는 경우, 새 활동 로그를 생성하여 로그인 시간을 현재로 설정
    if (!latestActivityLog || latestActivityLog.logoutTime) {
      const activityLog = new ActivityLog({
        userId: user._id,
        loginTime: new Date(),
        logoutTime: null, // 로그아웃 시간을 null로 설정
      });
      await activityLog.save();
    } else {
      // 기존 활동 로그의 로그인 시간을 새로운 현재 시간으로 업데이트
      latestActivityLog.loginTime = new Date();
      await latestActivityLog.save();
    }
  } catch (e) {
    ctx.status = 500;
    ctx.throw(e);
  }
};

// GET /api/auth/check
export const check = async (ctx) => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인되지 않았을 때
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

export const logout = async (ctx) => {
  const { user } = ctx.state;

  // 사용자가 없을 때 에러 처리
  if (!user) {
    ctx.status = 401; // Unauthorized
    return;
  }

  // 로그아웃 성공
  ctx.status = 200;

  try {
    if (!user) {
      ctx.status = 401; // Unauthorized
      return;
    }

    // 사용자의 로그아웃 활동 기록을 업데이트
    const latestActivityLog = await ActivityLog.findOne({
      userId: user._id,
    }).sort({ loginTime: -1 });

    if (latestActivityLog) {
      latestActivityLog.logoutTime = new Date(); // 현재 시간을 사용하여 로그아웃 시간 기록
      await latestActivityLog.save();
    }

    // 사용자의 인증 토큰을 만료시키는 작업 등 추가 작업이 필요할 수 있습니다.

    ctx.status = 204; // No Content
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET /api/auth/log-time
export const getLogoutTime = async (ctx) => {
  const { user } = ctx.state;

  // 사용자가 없을 때 에러 처리
  if (!user) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    // 사용자의 최신 활동 로그 찾기
    const latestActivityLog = await ActivityLog.findOne({
      userId: user._id,
    }).sort({ loginTime: -1 });

    if (latestActivityLog) {
      // 로그아웃 시간을 프론트엔드로 반환
      ctx.body = {
        loginTime: latestActivityLog.loginTime,
        logoutTime: latestActivityLog.logoutTime,
      };
    } else {
      ctx.status = 404; // Not Found
    }
  } catch (e) {
    ctx.status = 500;
    ctx.throw(e);
  }
};
