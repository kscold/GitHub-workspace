import { useEffect } from "react";
import { useRouter } from "next/router";

import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

// 1. 로그인체크(refreshToken 이전)
// export const 로그인체크 = (컴포넌트: any) => (프롭스: any) => {
//   const router = useRouter();

//   useEffect(() => {
//     if (localStorage.getItem("accessToken") === null) {
//       alert("로그인 후 이용 가능합니다!!!");
//       void router.push("/section23/23-05-login-check-hoc");
//     }
//   }, []);

// 2. 로그인 체크(refreshToken 이후)
export const 로그인체크 = (컴포넌트: any) => (프롭스: any) => {
  // hoc를 이용
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 2. 로그인 체크(refreshToken 이후) => 안좋음) _app.tsx에 이어서 총 2번 요청하게 됨
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     // 만들어놓은 함수를 호출
  //     if (newAccessToken === undefined) {
  //       alert("로그인 후 이용 가능합니다!!!");
  //       void router.push("/section23/23-05-login-check-hoc");
  //     }
  //   });
  // }, []);

  // 3. 로그인 체크(refreshToken 이후) => 좋음 함수를 공유하므로 _app.tsx에 이어서 총 한번만 요청하게 됨
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      // aaa로 리코일 상태를 뽑아서 씀
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다!!!");
        void router.push("/section23/23-05-login-check-hoc");
      }
    });
  }, []);
  return <컴포넌트 {...프롭스} />;
};
