import { useQuery, gql } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"
import type { MouseEvent } from "react"


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
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS) // refetchQuerires는 mutation을 하고 값을 가져오는 것이고
    // 그냥 refetch는 언제든지 값을 가져올 수 있는 정의되어져 있는 함수
    console.log(data?.fetchBoards)

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) })
    }

    // const onClickPage2 = (): void => {
    //     void refetch({ page: 2 })
    // }

    // const onClickPage3 = (): void => {
    //     void refetch({ page: 3 })
    // }

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: '10px' }}>{el.title} </span>
                    <span style={{ margin: '10px' }}>{el.writer}</span>
                </div>
            ))}

            {new Array(10).fill("철수").map((_, index) => ( // 1이든 철수이던 중요하지 않음 index를 사용하고 있기 때문에
                <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
                    {index + 1}
                </span>
            ))}

            {/* {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => ( 
                    <span key={el} id={String(el)} onClick={onClickPage}>
                        {el}
                    </span>
                ))
            } */}

            {/* <span id="1" onClick={onClickPage}>1</span> */}
        </div>
    )
}