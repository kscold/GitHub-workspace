// src/api/index.js

import Router from 'koa-router';
import posts from './posts'; // Import the router defined in the ./posts.ctrl.js file
import auth from './auth';

const api = new Router();

api.use('/posts', posts.routes()); // Use the .routes() method of the 'posts' router
api.use('/auth', auth.routes());

// 라우터를 내보냅니다.
export default api;
