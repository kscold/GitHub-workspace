import { useQuery, gql } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"
import { useState, type MouseEvent } from "react"

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) { 
            _id
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage(): JSX.Element {
    const [myIndex, setMyIdex] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
        const qqq = [...myIndex] // 제대로된 얕은 복사 ...을 안쓰고 바꾸면 원본값을 바꾸기 때문에 같은 값으로 인식해 렌더링을 무시함
        qqq[Number(event.currentTarget.id)] = true
        setMyIdex(qqq)
    }

    return (
        <div>
            {data?.fetchBoards.map((el, index) => (
                !myIndex[index] ? (
                    <div key={el._id}>
                        <span style={{ margin: '10px' }}>{el.title} </span>
                        <span style={{ margin: '10px' }}>{el.writer}</span>
                        <button id={String(index)} onClick={onClickEdit}>수정하기</button>
                    </div>
                ) : (
                    <input type="text" key={el._id} />
                )
            ))}
        </div>
    )
}