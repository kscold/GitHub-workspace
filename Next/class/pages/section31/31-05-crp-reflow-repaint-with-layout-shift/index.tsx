import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {(data?.fetchBoards ?? new Array(10).fill(1)).map(
        (
          el // null 병합 연산자로 null이 아니면 불러온 데이터를 보여주고 null 이면 빈배열을 넎어서
        ) => (
          // 영역을 잡아놓음
          <div key={el._id} style={{ height: "30px" }}>
            <span style={{ margin: "10px" }}>{el.title} </span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        )
      )}

      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
