import { useQuery, gql } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";
import { 로그인체크 } from "../../../src/components/commons/hocs/로그인체크";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function 마이페이지(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

export default 로그인체크(마이페이지); // 이렇게 하면 로그인체크를 먼저하고 마이페이지를 실행시킴
// 현재 로그인체크에서 마이페이지는 컴포넌트로 들어가고 프롭스는 없는 상태
