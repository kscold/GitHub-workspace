import { useState } from "react"

export default function CounterLetDocumentPage() {
    const [count, setCount] = useState(0)

    return ( //중요 클래스 컴포넌트에는 문자열 자체를 바꾸기 때문에 특정 태그의 문자열을 수정하지 않아도 되지만, useState에서는 기본 변수를 써줘야됨
        <div>
            <div id='qqq'>{count}</div>
            <button onClick={() => setCount(count + 1)}>카운트 올리기!!!</button>
            <button onClick={() => setCount(count - 1)}>카운트 내리기!!!</button>
        </div >
    )

}