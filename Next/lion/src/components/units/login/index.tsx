// src/components/login/index.tsx;
import React, { useState } from "react";
import Link from "next/link";
import {
  ButtonWithMarginTop,
  Footer,
  StyledInput,
  LoginWrapper,
  LoginFormWrapper,
} from "./logincss";

import { useRecoilState } from "recoil";
import { userNameState } from "../../commons/recoilState";
import axios from "axios";

const Login = (): JSX.Element => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [, setUserName] = useRecoilState(userNameState);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      if (response.data) {
        const user = response.data;
        console.log("Login successful");
        localStorage.setItem("isLoggedIn", "true");
        setUserName(user.username);
        console.log(user.username);

        // Reload the page after login
        window.location.reload();
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
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
              login
            </ButtonWithMarginTop>
          </form>
          <Footer>
            <Link href="/Register">회원가입</Link>
          </Footer>
        </LoginFormWrapper>
      </LoginWrapper>
    </div>
  );
};

export default Login;
