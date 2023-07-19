import { useQuery, gql } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../src/commons/types/generated/types"
import { useState, type MouseEvent } from "react"


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

const FETCH_BOARDS_COUNT = gql`
    query{
        fetchBoardsCount
    }
`

export default function StaticRoutingMovedPage(): JSX.Element {
    const [startPage, setStartPage] = useState(1);

    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS) // refetchQuerires는 mutation을 하고 값을 가져오는 것이고
    // 그냥 refetch는 언제든지 값을 가져올 수 있는 정의되어져 있는 함수

    const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

    const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10) // undefined이면 10으로 해라. 이후에 api를 통해 받아오면 재계산

    console.log(data?.fetchBoards)

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    };

    const onClickPrevPage = (): void => {
        if (startPage === 1) return;
        setStartPage(startPage - 10);
        void refetch({ page: startPage - 10 });
    }

    const onClickNextPage = (): void => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10);
            void refetch({ page: startPage + 10 });
        }
    }


    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: '10px' }}>{el.title} </span>
                    <span style={{ margin: '10px' }}>{el.writer}</span>
                </div>
            ))}

            <span onClick={onClickPrevPage}>이전페이지</span>
            {new Array(10).fill("철수").map((_, index) => // 1이든 철수이던 중요하지 않음 index를 사용하고 있기 때문에
                index + startPage <= lastPage &&
                (<span
                    key={index + startPage}
                    id={String(index + startPage)}
                    onClick={onClickPage}
                    style={{ margin: "5px" }}
                >
                    {index + startPage}
                </span>)
            )}
            <span onClick={onClickNextPage}>다음페이지</span>

        </div>
    )
}