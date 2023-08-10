const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    // ctx.state koa 컨텍스트 내의 속성 state 안에 user가 있는지 확인
    ctx.status = 401; // Unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
