import { useQuery, gql } from '@apollo/client'
import { MouseEvent } from 'react';

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            #한개 가지고 올때 Board 명령어, 목록은 Boards
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS)

    console.log(data?.fetchBoards)

    const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
        //if (event.target instanceof HTMLDivElement)
        alert(event.currentTarget.id + '님이 작성한 글입니다.') //위로 올라간 target currentTarget
    }

    const qqq = () => {
        alert("클릭 타이틀")
    }

    return (
        <div>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={onClickAlert}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: '10px' }}>{el.number}</span>
                    <span style={{ margin: '10px' }}>{el.title}</span>
                    <span style={{ margin: '10px' }}>{el.writer}</span>
                </div>
            ))
            }
        </div >
    )
}
