import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,*
//   };
// };

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router(); // /api/posts/:id // 리펙토링 하기 위해 새로운 라우터 페이지를 저장하는 객체를 만듬
post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.remove);
// posts.put('/:id', postsCtrl.replace);
post.patch('/', postsCtrl.update);

posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;
