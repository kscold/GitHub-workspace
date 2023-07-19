import { useQuery, gql } from "@apollo/client"

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

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS) //여기서 중괄호는 data로 항상 고정되어 있음
    //이 코드를 실행시키는 순간 api 요청이 날라가서 서버에서 응답을 가져옴

    console.log(data?.fetchBoards)

    //useQuery의 기본적인 작동방식이 비동기 작업이기 때문에 하드코딩 된 부분이 먼저 실행되고, 처음 data를 undefined로 가져옴
    //따라서 데이터가 들어왔을 때만 받으라는 data&& 작업이 필요함 대부분의 사이트는 비동기를 사용함 왜냐하면, 네트워크에 민감하기 때문
    // optional-chaining을 통해 data&&을 data?.으로 바꿀 수 있음

    //원래는 이런식으로 css 변수를 만들고 넣어서 {}가 하나인 것인데 바로 내부 값을 주므로 {{}} 가됨
    // const mystyles = {
    //     margin: '10px',
    //     padding: '10px'
    // }

    return (
        <div>
            {data?.fetchBoards.map(el => (
                <div>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: '10px' }}>{el.number}</span>
                    <span style={{ margin: '10px' }}>{el.title} </span>
                    <span style={{ margin: '10px' }}>{el.writer}</span>
                </div>
            ))}
        </div>
    )
}