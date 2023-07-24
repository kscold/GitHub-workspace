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
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      {/* <div>내용: {data?.fetchBoard?.contents}</div> */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            // 태그 그 자체를 읽어달라는 코드
            __html: Dompurify.sanitize(String(data?.fetchBoard?.contents)), // XSS 공격 방어
          }}
        />
      )}
    </div>
  );
}
