import Router from 'koa-router';
import posts from './posts'; // Import the router defined in the ./posts.ctrl.js file

const api = new Router();

api.use('/posts', posts.routes()); // Use the .routes() method of the 'posts' router

// api.get('/test', (ctx) => {
//   ctx.body = 'test 성공';
// });

// 라우터를 내보냅니다.
export default api;
