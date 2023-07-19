import { useState } from "react"

export default function CounterLetDocumentPage(): JSX.Element {
    const [count, setCount] = useState(0)

    function onClickCountUp(): void {
        setCount((prev) => prev + 1); // 리엑트의 화면의 그리기 전 임시저장소에 있는 값을 가져오는 선언되어있는 변수 prev를 사용
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    return (
        <div>
            <div id='qqq'>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!!</button>
            {/* <button onClick={ }>카운트 내리기!!!</button> */}
        </div >
    )

}