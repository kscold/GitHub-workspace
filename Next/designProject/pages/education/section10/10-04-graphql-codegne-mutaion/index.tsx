import { useMutation, gql } from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types"
import { useState } from "react"

//변수의 형식을 꼭 지정해 주어야함
const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  //const [나의함수] = useMutation<결과타입, 변수타입>(나의그래프큐엘셋팅) //axios.get("https://koreanjson.com/posts/1")와 똑같은 코드
  //const [counter, setCounter] = useState<number>(0)

  const [myFunction] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(나의그래프큐엘셋팅)

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        // variables 이게 $ 역할을 함
        writer: "훈이",
        title: "안녕하세요!!",
        contents: "반갑습니다",
      },
    })
    console.log(result)
  }

  return <button onClick={onClickSubmit}>GRAPHQL-API요청하기</button>
}
