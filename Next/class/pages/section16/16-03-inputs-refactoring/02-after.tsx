import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ 
        Board(writer: $writer, title: $title, contents: $contents){
            writer
            title
            contents
        }
    }
`

export default function GraphqlMutationPage() {
    const [inputs, setInputs] = useState({
        writer: "",
        title: "",
        contents: ""
    })
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { // variables 이게 $ 역할을 함
                ...inputs
            }
        })
        console.log(result)
    }

    const onChangeInputs = (event) => {
        setInputs((prev) => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }


    return (
        <div>
            작성자: <input type="text" id="writer" onChange={onChangeInputs} />
            제목: <input type="text" id="title" onChange={onChangeInputs} />
            내용: <input type="text" id="contents" onChange={onChangeInputs} />
            <button onClick={onClickSubmit} >GRAPHQL-API요청하기</ button>
        </div>
    )
}