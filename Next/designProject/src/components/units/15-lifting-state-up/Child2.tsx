export default function Child2(props: any): JSX.Element {
    // const { count, onClickCount } = props // 비구조화 할당도 가능

    return (
        <div>
            <div>자식2의 카운트: {props.count}</div>
            <button onClick={props.onClickCount}>카운트 올리기!!!</button>
        </div >
    )

}