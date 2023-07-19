import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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
  console.log(data?.fetchBoards);

  const onClickPage = (page: number) => (): void => {
    void refetch({ page }); // key와 value가 현재 둘 다 page이므로 shorthand property
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title} </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      {new Array(10).fill("철수").map(
        (
          _,
          index // 1이든 철수이던 중요하지 않음 index를 사용하고 있기 때문에
        ) => (
          <span
            key={index + 1}
            onClick={onClickPage(index + 1)} // 사실 onClickPage()(event)
          >
            {index + 1}
          </span>
        )
      )}
    </div>
  );
}
