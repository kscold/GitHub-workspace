export default function CounterLetDocumentPage() {

    function onClickCountUp() {
        const count = Number(document.getElementById('qqq').innerText) + 1;
        // 여기서 document.getElementByID('qqq').innerText까지가 현제 div id의 qqq를 가져오는 코드임 이후 Number함수로 숫자로 바꾼 후 +1 을 계산 후 count에 저장
        document.getElementById("qqq").innerText = count
        //count에 저장된 값을 qqq div에 다시 업데이트
    }

    function onClickCountDown() {
        const count = Number(document.getElementById('qqq').innerText) - 1;
        document.getElementById("qqq").innerText = count
    }


    return (
        <div>
            <div id='qqq'>0</div>
            <button onClick={onClickCountUp}>카운트 올리기!!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!!</button>
        </div>
    )

}