import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

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
