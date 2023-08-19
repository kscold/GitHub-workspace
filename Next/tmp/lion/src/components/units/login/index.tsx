// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRecoilState } from "recoil";
// import { userNameState, isLoginState } from "../../commons/recoilState";
// import axios from "axios";
// import {
//   ButtonWithMarginTop,
//   Footer,
//   StyledInput,
//   LoginWrapper,
//   LoginFormWrapper,
// } from "./logincss";
// import { useRouter } from "next/router";

// const Login = (): JSX.Element => {
//   const [userName, setUserName] = useRecoilState(userNameState);
//   const [isLogin, setIsLogin] = useRecoilState(isLoginState);
//   const router = useRouter();

//   const [isInputFilled, setIsInputFilled] = useState(false);

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   useEffect(() => {
//     setIsInputFilled(
//       formData.username.trim() !== "" || formData.password.trim() !== ""
//     );
//   }, [formData.username, formData.password]);

//   useEffect(() => {
//     const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
//     const storedUsername = localStorage.getItem("username");
//     const storedAccessToken = localStorage.getItem("accessToken");

//     if (storedIsLoggedIn === "true" && storedUsername) {
//       setUserName(storedUsername);
//       setIsLogin(true);

//       if (storedAccessToken) {
//         const refreshTokenInterval = setInterval(() => {
//           refreshToken();
//         }, 50 * 60 * 1000);

//         return () => clearInterval(refreshTokenInterval);
//       }
//     }
//   }, []);

//   const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const loginUser = async () => {
//     try {
//       const response = await axios.post(
//         "http://backend-practice.codebootcamp.co.kr/graphql",
//         {
//           query: `
//             mutation {
//               loginUser(email: "${formData.username}", password: "${formData.password}") {
//                 accessToken
//               }
//             }
//           `,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data.data.loginUser.accessToken) {
//         const accessToken = response.data.data.loginUser.accessToken;

//         localStorage.setItem("accessToken", accessToken);
//         getUserData(accessToken);
//       } else {
//         console.log("Login failed");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
//     }
//   };

//   const refreshToken = async () => {
//     try {
//       const response = await axios.post(
//         "http://backend-practice.codebootcamp.co.kr/graphql",
//         {
//           query: `
//             mutation {
//               refreshToken {
//                 accessToken
//               }
//             }
//           `,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data.data.refreshToken.accessToken) {
//         const accessToken = response.data.data.refreshToken.accessToken;
//         localStorage.setItem("accessToken", accessToken);
//       } else {
//         console.log("Token refresh failed");
//       }
//     } catch (error) {
//       console.error("Error refreshing token:", error);
//     }
//   };

//   const getUserData = async (accessToken: any) => {
//     try {
//       const userResponse = await axios.post(
//         "http://backend-practice.codebootcamp.co.kr/graphql",
//         {
//           query: `
//             query {
//               fetchUserLoggedIn {
//                 email
//                 name
//               }
//             }
//           `,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (userResponse.data.data.fetchUserLoggedIn) {
//         const userName = userResponse.data.data.fetchUserLoggedIn.name;

//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("username", userName);
//         setUserName(userName);
//         setIsLogin(true);

//         window.location.reload();
//       } else {
//         console.log("User data fetch failed");
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const onSubmitLogin = async (
//     event: React.FormEvent<HTMLFormElement>
//   ): Promise<void> => {
//     event.preventDefault();
//     if (isInputFilled) {
//       loginUser();
//     }
//   };

//   const onClickGoogle = async () => {
//     try {
//       await router.push("http://localhost:8080/oauth2/authorization/google");
//     } catch (error) {
//       console.error("Error redirecting to Google login:", error);
//     }
//   };

//   const saveUserNameToLocalStorage = (userName: string): void => {
//     localStorage.setItem("username", decodeURIComponent(userName));
//     localStorage.setItem("isLoggedIn", "true");
//     setUserName(decodeURIComponent(userName));
//     setIsLogin(true);
//   };

//   useEffect(() => {
//     const processUserNameFromURL = () => {
//       if (!router.isReady || isLogin) {
//         return;
//       }

//       const userNameFromURL = router.query.userName;

//       if (userNameFromURL) {
//         saveUserNameToLocalStorage(userNameFromURL);
//       }
//     };

//     processUserNameFromURL();
//   }, [router.isReady, isLogin]);

//   return (
//     <div style={{ display: "flex", justifyContent: "flex-end" }}>
//       <LoginWrapper>
//         <LoginFormWrapper>
//           <h3 style={{ marginBottom: "4px" }}>로그인</h3>
//           <form onSubmit={onSubmitLogin}>
//             <StyledInput
//               autoComplete="username"
//               name="username"
//               placeholder="id"
//               value={formData.username}
//               onChange={onChangeInput}
//             />
//             <StyledInput
//               autoComplete="current-password"
//               name="password"
//               placeholder="password"
//               type="password"
//               value={formData.password}
//               onChange={onChangeInput}
//             />
//             <ButtonWithMarginTop
//               fullWidth
//               type="submit"
//               disabled={!isInputFilled}
//             >
//               로그인
//             </ButtonWithMarginTop>
//           </form>
//           <Footer>
//             <Link href="/Register">회원가입</Link>
//           </Footer>
//           <button onClick={onClickGoogle}>구글 로그인</button>
//         </LoginFormWrapper>
//       </LoginWrapper>
//     </div>
//   );
// };

// export default Login;

// 슈퍼베이스 백엔드 연결
// src/components/units/login/index.tsx
import React, { useState, useEffect } from "react";
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
import jwtDecode from "jwt-decode";

const Login = (): JSX.Element => {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [lastSignInAt, setLastSignInAt] = useState("");
  const router = useRouter();

  const [isInputFilled, setIsInputFilled] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [storedAccessToken, setStoredAccessToken] = useState("");

  const refreshToken = async () => {
    try {
      const currentExpireTime = jwtDecode(storedAccessToken).expires_at;
      const now = new Date().getTime();
      const expiresIn = currentExpireTime - now;
      if (expiresIn > 0) {
        return;
      }

      const response = await axios.post(
        "https://wjjjsbifausxxiafieii.supabase.co/auth/v1/token?grant_type=refresh_token",
        {
          refresh_token: data.refresh_token,
          grant_type: "refresh_token",
        },
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqampzYmlmYXVzeHhpYWZpZWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyODI2MzUsImV4cCI6MjAwNzg1ODYzNX0.EaTFiRYVtAjf0M1AtwBGtYNneNpcMsR9T-f1zEYCZKY",
          },
        }
      );
      if (response.data && response.data.access_token) {
        const { access_token, expires_in } = response.data;

        localStorage.setItem("accessToken", access_token);
        setStoredAccessToken(access_token);
      } else {
        console.log("Token refresh failed");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  useEffect(() => {
    setIsInputFilled(
      formData.username.trim() !== "" || formData.password.trim() !== ""
    );
  }, [formData.username, formData.password]);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUsername = localStorage.getItem("username");
    const accessToken = localStorage.getItem("accessToken");

    if (storedIsLoggedIn === "true" && storedUsername) {
      setUserName(storedUsername);
      setIsLogin(true);

      if (accessToken) {
        setStoredAccessToken(accessToken);
        // access token 갱신
        // 50분마다 access token 자동 갱신
        const refreshTokenInterval = setInterval(() => {
          refreshToken();
        }, 50 * 60 * 1000);

        return () => clearInterval(refreshTokenInterval);
      }
    }
  }, []);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "https://wjjjsbifausxxiafieii.supabase.co/auth/v1/token?grant_type=password",
        {
          email: formData.username, // Supabase에서 username 대신 email로 인증 처리하기 때문입니다.
          password: formData.password,
          grant_type: "password",
        },
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqampzYmlmYXVzeHhpYWZpZWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyODI2MzUsImV4cCI6MjAwNzg1ODYzNX0.EaTFiRYVtAjf0M1AtwBGtYNneNpcMsR9T-f1zEYCZKY",
            // Authorization: `Bearer ${storedAccessToken}`,
          },
        }
      );

      const { data } = response;
      if (data && data.access_token) {
        const { access_token } = data;
        const decodedToken = jwtDecode(access_token);
        const userName = data.user?.email;

        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", userName || "");
        // Login time
        const loginTime = data.user?.last_sign_in_at;
        localStorage.setItem("lastSignInAt", loginTime || "");
        setLastSignInAt(loginTime || ""); // 새로 대입
        setUserName(userName || "");
        setIsLogin(true);
        router.push("/");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  const onSubmitLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (isInputFilled) {
      loginUser();
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
            <ButtonWithMarginTop
              fullWidth
              type="submit"
              disabled={!isInputFilled}
            >
              로그인
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
