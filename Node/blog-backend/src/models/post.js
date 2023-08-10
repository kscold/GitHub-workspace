import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본갑으로 지정
  },
  user: {
    // 회원인증 서비스를 위한 user 로그인
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model('Post', PostSchema); // 스키마를 만들고 이를 실행시켜줄 함수인 모델은 만들어줌
// 첫번째 파라미터는 스키마 이름, 두번째는 스키마 객체
// 데이터베이스는 똑똑하게 Post라고 설정하면 posts라고 복수형으로 만들어줌
export default Post; // 모델를 수출
