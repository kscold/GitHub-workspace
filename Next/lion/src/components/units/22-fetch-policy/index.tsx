import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
    }
  }
`;

export default function FetchPolicyExample(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
    // {
    //   fetchPolicy: "network-only", // 무조건 백엔드에서 새로 받는다는 뜻
    // }
  );

  return (
    <div>
      {/* {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title} </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))} */}
    </div>
  );
}
