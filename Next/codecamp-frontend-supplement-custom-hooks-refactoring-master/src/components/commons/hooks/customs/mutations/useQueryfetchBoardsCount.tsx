import { useQuery } from "@apollo/client"
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../../commons/types/generated/types"
import { gql } from "@apollo/client"

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`
export const useQueryfetchBoardsCount = () => {
  const result = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)
  return result
}
