import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage() {
    const router = useRouter();
    console.log(router)


    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) } //router.query == useRouter().query정해진 변수
    }) //여기서 중괄호는 data로 항상 고정되어 있음
    //이 코드를 실행시키는 순간 api 요청이 날라가서 서버에서 응답을 가져옴

    console.log(data)

    const onClickMove = () => {
        router.push(`/section09/09-04-boards/${router.query.number}/edit`)
    }


    return (
        <div>
            <div>{router.query.number}번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data && data.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
            <button onClick={onClickMove}>수정하러가기</button>
        </div>
    )
}