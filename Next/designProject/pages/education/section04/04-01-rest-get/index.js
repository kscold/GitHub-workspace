import axios from "axios"

export default function RestGetPage() {

    function onClickAsync() {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) //Promis라는 결과를 보여줌 비동기이기 때문 나중에 줄게 라는 뜻
    }

    // async function onClicksync() {
    //     const result = await axios.get("https://koreanjson.com/posts/1") //함수 중복 선언 문제
    //     console.log(result) // 제대로된 결과 { title: "...", } 
    //     console.log(result.data.title) //title만 가져오기
    // }

    const onClicksync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result) // 제대로된 결과 { title: "...", }
        console.log(result.data.title) //title만 가져오기
    }

    return (
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClicksync}>REST_API(동기) 요청하기</button>
        </div>
    )
}