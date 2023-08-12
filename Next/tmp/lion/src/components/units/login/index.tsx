// src/components/units/login/index.tsx
import React, { useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { userNameState, isLoginState } from "../../commons/recoilState";
import axios from "axios";
import {
  ButtonWithMarginTop,
  Footer,
  StyledInput,
  LoginWrapper,
  LoginFormWrapper,
} from "./logincss";
import { useRouter } from "next/router";

const Login = (): JSX.Element => {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      // 로그인 통신에 성공하면
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      if (response.data) {
        // 로그인에 성공하면
        const user = response.data;
        console.log("로그인 성공");
        localStorage.setItem("isLoggedIn", "true");
        // 로그인 상태를 로컬 스토리지에 저장
        localStorage.setItem("username", user.username);
        // 사용자 이름을 로컬 스토리지에 저장

        setUserName(user.username);
        // 사용자 이름을 Recoil 상태에 저장
        setIsLogin(true);
        // 로그인 상태를 Recoil 상태에 저장

        console.log(isLogin);
        console.log(user.username);

        // 페이지를 리로드 -> 애니매이션 버그를 해결하기 위해(먼저 localStorage가 선행되어야함)
        window.location.reload();
      } else {
        // 로그인에 실패하면
        console.log("Login failed");
      }
    } catch (error) {
      // 로그인 통신에 실패하면
      console.error("Error logging in:", error);
    }
  };

  const googleLogin = async (): Promise<void> => {
    try {
      const response = await axios.get(
        "http://localhost:8080/oauth2/authorization/google"
      );

      if (response.data) {
        // Google 로그인 페이지로 리다이렉트
        window.location.href = response.data;
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <LoginWrapper>
        <LoginFormWrapper>
          <h3 style={{ marginBottom: "4px" }}>로그인</h3>
          <form onSubmit={onSubmitLogin}>
            <StyledInput
              autoComplete="username"
              name="username"
              placeholder="id"
              value={formData.username}
              onChange={onChangeInput}
            />
            <StyledInput
              autoComplete="current-password"
              name="password"
              placeholder="password"
              type="password"
              value={formData.password}
              onChange={onChangeInput}
            />
            <ButtonWithMarginTop fullWidth type="submit">
              로그인
            </ButtonWithMarginTop>
          </form>
          <Footer>
            <Link href="/Register">회원가입</Link>
            <button onClick={googleLogin}>구글</button>
          </Footer>
        </LoginFormWrapper>
      </LoginWrapper>
    </div>
  );
};

export default Login;
