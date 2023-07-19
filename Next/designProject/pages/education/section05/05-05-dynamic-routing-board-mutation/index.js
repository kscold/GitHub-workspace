import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"

//변수의 형식을 꼭 지정해 주어야함
const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ 
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const router = useRouter();

    const [나의함수] = useMutation(나의그래프큐엘셋팅) //axios.get("https://koreanjson.com/posts/1")와 똑같은 코드

    const onClickSubmit = async () => {

        try { //서버가 항상 맞을 수 없기 때문에 항상 try catch 구문을 만들어 주는 것이 중요함 성공하면 catch는 실행되지 않음
            const result = await 나의함수({
                variables: { // variables 이게 $ 역할을 함
                    writer: "훈이",
                    title: "안녕하세요!!",
                    contents: "반갑습니다"
                }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push("/section05/05-05-dynamic-routing-board-mutation-moved/" + result.data.createBoard.number)
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`) //같은 방식
        } catch (error) { //오류가 나면 catch만 실행됨 현재 error변수는 백엔드에서 정의되어 있는 에러임
            alert(error.message)
        }
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API요청하기</button>
}