import { useQuery, gql } from "@apollo/client"
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../commons/types/generated/types"

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`

export const useQueryFetchBoards = () => {
  const result = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  )

  return result
}
