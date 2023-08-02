import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  // 인스턴스 매서드를 작성할 때는 화살표 함수가 아닌
  // function 키워드를 사용하여 구현해야 함. 함수 내부에서 this(사용하고 있는 현재 문서 인스턴스)에 접근해야 하기 때문
  // 화살표 함수는 this 사용 불가능
  const hash = await bcrypt.hash(password, 10); // 10은 해싱 알고리즘의 강도
  this.hashedPassword = hash; // 사용자 문서에서 setPassword를 호출하면
  //this.hashedPassword는 해당 특정 사용자 문서의 hashedPassword를 생성함
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true / false
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username }); // findByUsername()을 사용하여 findByUsername을 호출하면
  // this는 모델을 가리키고 this.findOne({ username })은 주어진 사용자 이름을 가진 사용자 문서를 검색함
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  // this를 사용하기 위해 fuction 함수를 사용
  const token = jwt.sign(
    // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣습니다.
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣습니다.
    {
      expiresIn: '7d', // 3일 동안 유효함
    },
  );
  return token;
};

const User = mongoose.model('User', UserSchema);
export default User;
