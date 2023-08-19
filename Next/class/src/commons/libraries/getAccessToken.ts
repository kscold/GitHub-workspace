import { GraphQLClient, gql } from "graphql-request";
import type { IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      { credentials: "include" } // 쿠키를 정보를 주고 받을 때 포함시키겠다
    );
    const result = await graphQLClient.request<
      Pick<IMutation, "restoreAccessToken">
    >(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result?.restoreAccessToken.accessToken; // 여기까지 재사용성이 매우 높은 코드
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error)
      // 에러의 인스턴스 안에 있어야됨
      console.log(error.message);
  }
};
