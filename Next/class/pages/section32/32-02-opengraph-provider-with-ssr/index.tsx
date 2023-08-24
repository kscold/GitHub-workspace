// 제공자일때 => 네이버, 다음, 쿠팡

import { gql } from "@apollo/client";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

interface Props {
  qqq: {
    name: string;
    remarks: string;
    images: string[];
  };
}

export default function OpengraphProviderPage(props: Props): JSX.Element {
  // const { data } = useQuery(FETCH_USEDITEM, {
  //   variables: { useditemId: "64e72caf5d6eaa0029f79daf" },
  // });

  console.log("나의프롭스: ", props);

  return (
    <>
      <Head>
        <meta property="og:title" content={props.qqq.name} />
        <meta property="og:description" content={props.qqq.remarks} />
        <meta property="og:image" content={props.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다!(여기는 Body입니다.)</div>
    </>
  );
}

// 1. getServerSideProps는 존재하는 단어이므로 변경 불가능
// 2. 여기는 서버에서만 실행됨(프론트엔드 서버프로그램 => webpack 서버프로그램)
export const getServerSideProps = async (): Promise<any> => {
  console.log("여기는 서버입니다.");

  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "http://backend-practice.codebootcamp.co.kr/graphql"
  );
  const result = await graphQLClient.request(FETCH_USEDITEM, {
    // getServerSideProps 함수 내에는 아폴로세팅이 적용되지 않으므로 graphQLClient.request 사용
    useditemId: "64e72caf5d6eaa0029f79daf",
  });

  //  2. 받은 결과를 return
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
