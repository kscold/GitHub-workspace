import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation, gql } from "@apollo/client"
import { useState } from "react"


export default function BoardWrite() {
    //cotainer는 로직만 담고 UI는 쓰지말자

    const [나의함수] = useMutation(나의그래프큐엘셋팅) //axios.get("https://koreanjson.com/posts/1")와 똑같은 코드

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { // variables 이게 $ 역할을 함
                writer: writer,  //첫번째 writer는 $역할 두번쨰 writer는 state임
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <BoardWriteUI
            aaa={onClickSubmit}
            bbb={onChangeWriter}
            ccc={onChangeTitle}
            ddd={onChangeContents}
        />
    )

    // props = {
    //     aaa:onClickSubmit
    //     bbb:onChangeWriter
    //     ccc:onChangeTitle
    //     ddd:onChangeContents
    // }
}