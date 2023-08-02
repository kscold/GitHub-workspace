// let postId = 1; // id의 초깃값입니다.

// // posts 배열 초기 데이터
// const posts = [
//   {
//     id: 1,
//     title: '제목',
//     body: '내용',
//   },
// ];

// // 포스트 작성
// // POST /api/posts
// // {title, body}

// export const write = (ctx) => {
//   // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
//   const { title, body } = ctx.request.body; // request(POST 또는 PUT)보낸 ctx의 payload 의 개체에서 title, body를 추출
//   postId += 1; // 기존 postId 값에 1을 더합니다.
//   const post = { id: postId, title, body }; // 추출한 title, body을 더해서 post 객체 업데이트
//   posts.push(post); // 객체 값을 원래 객체에 없데이트
//   ctx.body = post; // post 객체(복사된 객체) 값을 ctx.body(다시 전송될 HTTP 응답의 내용을 정의)에 대입(백업)
//   //post는 수정하기 편함 , ctx.body는 원 데이터값
// };

// // 포스트 목록 조회
// // GET /api/posts

// export const list = (ctx) => {
//   ctx.body = posts; // 원 객체를 가져옴
// };

// // 특정 포스트 조회
// // GET /api/posts/:id

// export const read = (ctx) => {
//   const { id } = ctx.params; // :이름 으로 받는 값들을 저장
//   // 주어진 id 값으로 포스트를 찾습니다.
//   // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
//   // 비교할 p.id 값을 문자열로 변경해야 합니다.
//   const post = posts.find((p) => p.id.toString() === id); // index를 찾으면 조건에 맞는 값 중에 첫번째 값을 반환
//   // 포스트가 없으면 오류를 반환합니다.
//   if (!post) {
//     // 포스트가 없으면
//     ctx.status = 404; // status을 404로
//     ctx.body = {
//       // body(payload) 설정
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   ctx.body = post; // ctx.body를 업데이트
// };

// // 특정 포스트 제거
// // DELETE /api/posts/:id

// export const remove = (ctx) => {
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇 번째인지 확인합니다.
//   const index = posts.findIndex((p) => p.id.toString() === id); // 좀 더 엄격한 비교를 보장하기 위해 id를 String 타입으로 변환
//   // 객체 요소의 id 인덱스를 반환
//   // 포스트가 없으면 오류를 반환합니다.
//   if (index === -1) {
//     // 요구한 인덱스가 없으면
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // index번째 아이템을 제거합니다.
//   posts.splice(index, 1); // index에서 시작하는 posts 배열에서 하나의 요소를 제거함
//   ctx.status = 204; // No Content // ststus 204로 설정
// };

// // 포스트 수정(교체)
// // PUT /api/posts/:id
// // { title, body }

// export const replace = (ctx) => {
//   // PUT 매서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용합니다.
//   const { id } = ctx.params; // :이름 데이터를 받음
//   // 해당 id를 가진 post가 몇 번째인지 확인합니다.
//   const index = posts.findIndex((p) => p.id.toString() === id); // id 인덱스를 찾고
//   // 포스트가 없으면 오류를 반환합니다.
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // 전체 객체를 덮어 씌웁니다.
//   // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듭니다.
//   posts[index] = {
//     // 뽑아온 index의 posts 객체를
//     id, // :이름 받아온 id 업데이트하고
//     ...ctx.request.body, // POST 나 PUT한 ctx.body 값을 새로운 객체로 가져옴
//   };
//   ctx.body = posts[index]; // ctx.body(나중에 요청할 http의 body)에 선택한 posts 객체를 업데이트
// };

// // 포스트수정(특정 필드 변경)
// // PATCH /api/posts/:id
// // { title, body }

// export const update = (ctx) => {
//   // PATCH 매서드는 주어진 필드만 교체합니다.
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇 번째인지 확인합니다.
//   const index = posts.findIndex((p) => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // 기존 값에 정보를 덮어 씌웁니다.
//   posts[index] = {
//     ...posts[index], // 선택한 posts 객체를 새로운 객체로 복사해서 가져옴
//     ...ctx.request.body, // http body(POST or PUT)의 내용을 가져옴
//   };
//   ctx.body = posts[index]; // ctx.body에 연결
// };

import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

// export const checkObjectId = (ctx, next) => {
//   // 미들웨어로 만들어서 여러 라우트를 쉽게 만듬
//   const { id } = ctx.params;
//   if (!ObjectId.isValid(id)) {
//     ctx.status = 400; // Bad Request
//     return;
//   }
//   return next();
// };

export const getPostById = async (ctx, next) => {
  // 미들웨어로 만들어서 여러 라우트를 쉽게 만듬
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  try {
    const post = await Post.findById(id);
    // 포스트가 존재하지 않을 때
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state; // state에서 user와 post를 비구조화 할당
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

// POST /api/posts
export const write = async (ctx) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), // resquired()가 있으면 필수 항목
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어진 배열
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;

  const post = new Post({
    title,
    body,
    tags,
    user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET /api/posts?username=&tag=&page=
export const list = async (ctx) => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
  // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
  const page = parseInt(ctx.query.page || '1', 10); // posts?숫자 이므로

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username': username } : {}), // username이 있으면 username 객체를 복사해서 가져오고
    ...(tag ? { tags: tag } : {}), // tag가 있으면 tag 객체를 복사해서 가져오고
  };

  try {
    const posts = await Post.find(query) // query에 검색에 맞는 값만 찾음
      .sort({ _id: -1 }) // 내림차순으로 정렬
      .limit(10) // 한번에 보이는 갯수를 제한
      .skip((page - 1) * 10) // 처음 10개 페이지를 제외하고 그 다음 데이터를 불러와햐 하므로
      .lean() // 이 함수를 사용하면 데이터를 처음부터 JSON 형태로 조회할 수 있음
      .exec(); // 데이터를 조회할 때 find()함수를 사용 이후에는 .exec()를 붙여야 쿼리를 요청
    const postCount = await Post.countDocuments(query).exec(); // query에 맞게 Post 갯수를 세어 줌
    ctx.set('Last-Page', Math.ceil(postCount / 10)); // 10으로 나눠서 반올림
    ctx.body = posts
      // .map((post) => post.toJSON()) // find()를 통해 조회한 데이터는 mongoose 문서 인스턴스의 형태이므로 데이터를 바로 변형불가능
      // 따라서 toJSON() 함수를 실행하려 JSON 형태로 변환한 뒤 필요한 변형을 일으킴
      .map((post) => ({
        ...post, // 이전포스트를을 가져오고 body만 200자로 제한
        body:
          post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
        // body의 길이가 200자 이상이면 뒤에 ...를 붙임
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET /api/posts/:id
export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// DELETE /api/posts/:id
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공하기는 했지만 응답할 데이터는 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
};

// PATCH /api/posts/:id
export const update = async (ctx) => {
  const { id } = ctx.params;

  console.log('Update request received for ID:', id);

  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    console.log('Validation error:', result.error.details);
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();

    if (!post) {
      console.log('Post not found for ID:', id);
      ctx.status = 404;
      return;
    }

    console.log('Post updated:', post);
    ctx.body = post;
  } catch (e) {
    console.error('Error while updating post:', e);
    ctx.throw(500, e);
  }
};
