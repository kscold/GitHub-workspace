import { useQuery, gql, useMutation } from "@apollo/client"

const FETCH_BOARDS = gql`
    query{
        fetchBoards{ #한개 가지고 올때 Board 명령어, 목록은 Boards
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS) //여기서 중괄호는 data로 항상 고정되어 있음
    //이 코드를 실행시키는 순간 api 요청이 날라가서 서버에서 응답을 가져옴

    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards)



    const onClickDelete = (event) => {
        Number(event.target.id) //문자열이기 때문에 숫자열로 바꿔줌
        deleteBoard({
            variables: { number: Number(event.target.id) },
            refetchQueries: [{ query: FETCH_BOARDS }] //삭제가 되면 새로운 값을 db에서 받아옴
        })
    }

    return (
        <div>
            {/* 특별한 이유가 없으면 Fragment로 감싸자! <div />는 1개 더 그려야되서 조금 느려짐 */}
            {data?.fetchBoards.map((el, index) => ( //key값을 사용하여 index를 가지게 만듬, index는 고정된 변수 그러나 el.number가 더 좋음
                //index가 유지되어 변수가 발생될 수 있음

                <div key={el.number}> {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 */}
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: '10px' }}>{el.number}</span>
                    <span style={{ margin: '10px' }}>{el.title} </span>
                    <span style={{ margin: '10px' }}>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </span>
                </div>
            ))}
        </div>
    )
}