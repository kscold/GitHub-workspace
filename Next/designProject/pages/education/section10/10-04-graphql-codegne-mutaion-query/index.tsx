import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types"

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingMovedPage() {
  const router = useRouter()
  console.log(router)

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { number: Number(router.query.qqq) }, //router.query 정해진 변수
  }) //여기서 중괄호는 data로 항상 고정되어 있음
  //이 코드를 실행시키는 순간 api 요청이 날라가서 서버에서 응답을 가져옴

  console.log(data)

  //useQuery의 기본적인 작동방식이 비동기 작업이기 때문에 하드코딩 된 부분이 먼저 실행되고, 처음 data를 undefined로 가져옴
  //따라서 데이터가 들어왔을 때만 받으라는 data&& 작업이 필요함 대부분의 사이트는 비동기를 사용함 왜냐하면, 네트워크에 민감하기 때문
  // optional-chaining을 통해 data&&을 data?.으로 바꿀 수 있음
  return (
    <div>
      <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>
  )
}
