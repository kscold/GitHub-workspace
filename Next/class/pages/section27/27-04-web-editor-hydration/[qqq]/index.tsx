import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import Dompurify from "dompurify"; // 1차적으로 보안

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.qqq) },
    }
  );

  return (
    <div>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard?.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard?.title}</div>
      {/* <div>내용: {data?.fetchBoard?.contents}</div> */}
      {typeof window !== "undefined" ? ( // 프리렌더링할 때 렌더링 구조와 브라우저에서 렌더링하는 구조가 달라서 색깔을 처음에 인식하지 못함
        <div
          dangerouslySetInnerHTML={{
            // 태그 그 자체를 읽어달라는 코드
            __html: Dompurify.sanitize(String(data?.fetchBoard?.contents)), // XSS 공격 방어
          }}
        />
      ) : (
        <div style={{ color: "blue" }} />
      )}
      <div style={{ color: "brown" }}>주소: 영등포구</div>
    </div>
  );
}
