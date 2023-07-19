export default function Checkbox() {
    const qqq2 = () => {
        alert("2번 클릭")
    }

    const qqq3 = (event) => { //컴포넌트로 분리해도 이벤트 버블링은 발생됨
        event.stopPropgation() //버블링이 중단됨
        alert("3번 클릭")
    }

    return (
        <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3} />
        </span>
    )
}