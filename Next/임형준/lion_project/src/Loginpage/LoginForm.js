import React, { useState } from 'react';
import './LoginForm.scss'; // 새로운 SCSS 파일 추가

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('로그인 정보:');
    console.log('이메일:', email);
    console.log('비밀번호:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3>로그인</h3>
      <div className="form-group">
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">로그인</button>
    </form>
  );
};

export default LoginForm;
