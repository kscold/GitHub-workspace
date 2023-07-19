import { useQuery, gql } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"
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

export default function StaticRoutingMovedPage(): JSX.Element {
    const [startPage, setStartPage] = useState(1);

    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS) // refetchQuerires는 mutation을 하고 값을 가져오는 것이고
    // 그냥 refetch는 언제든지 값을 가져올 수 있는 정의되어져 있는 함수
    console.log(data?.fetchBoards)

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    };

    const onClickPrevPage = (): void => {
        setStartPage(startPage - 10);
        void refetch({ page: startPage - 10 });
    }

    const onClickNextPage = (): void => {
        setStartPage(startPage + 10);
        void refetch({ page: startPage + 10 });
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
            {new Array(10).fill("철수").map((_, index) => ( // 1이든 철수이던 중요하지 않음 index를 사용하고 있기 때문에
                <span key={index + startPage} id={String(index + startPage)} onClick={onClickPage}>
                    {index + startPage}
                </span>
            ))}
            <span onClick={onClickNextPage}>다음페이지</span>

        </div>
    )
}