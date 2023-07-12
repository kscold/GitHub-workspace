import { useQuery, gql } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"
import InfiniteScroll from "react-infinite-scroller"

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) { #한개 가지고 올때 Board 명령어, 목록은 Boards
            _id
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage(): JSX.Element {
    const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    const onLoadMore = (): void => {
        if (data === undefined) return;

        void fetchMore({
            variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 }, // 다음페이지를 가리킴
            updateQuery: (prev, { fetchMoreResult }) => {
                if (fetchMoreResult.fetchBoards === undefined) {
                    return {
                        fetchBoards: [...prev.fetchBoards] // 이전의 값
                    }
                }
                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards] // 이전의 값 + 추가 값
                }
            }
        })
    };

    return (
        <div style={{
            height: "500px",
            overflow: "auto"
        }}>
            <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
                {data?.fetchBoards.map((el) => (
                    <div key={el._id}>
                        <span style={{ margin: '10px' }}>{el.title} </span>
                        <span style={{ margin: '10px' }}>{el.writer}</span>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
}