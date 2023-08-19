import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   console.log("나는 지금 브라우저다!!!");
  //   const result = localStorage.getItem("accessToken"); // accessToken을 로컬스토리지에 저장
  //   console.log(result);
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log(
  //     "지금은 프론트엔드 서버다!!(즉, yarn dev로 실행시킨 프로그램 내부다!"
  //   );
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   console.log("나는 지금 브라우저다!!!");
  // } else {
  //   console.log(
  //     "지금은 프론트엔드 서버다!!(즉, yarn dev로 실행시킨 프로그램 내부다!"
  //   );
  // }

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    const result = localStorage.getItem("accessToken"); // 로컬스토리지에 저장된 accessToken을 가져옴
    setAccessToken(result ?? "");
    // console.log("나는 지금 브라우저다!!!");
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      // 그래프큐엘 독스에 나와 있는 방법
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크()
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 연속적인 비동기 작업을 처리하기 위한 옵저버물이라는 적용하기 위한 코드
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // await 혹은 .then()을 사용
              setAccessToken(newAccessToken ?? "");

              // 3. 재발급 받은 acessToken으로 방금 실패한 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer asdfasfda => 만료돤 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                  // 같은 키가 존재하면 밑에 코드로 덮어씌워짐
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // 쿠기같은 중요한 정보를 주고 받고 하는데 포함시키겠다
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서가 매우 중요! errorLink가 먼저 들어가야됨
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  }); // grapql 세팅

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
