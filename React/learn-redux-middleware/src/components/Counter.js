const Counter = ({ onIncrease, onDecrease, number }) => { //이벤트 함수이므로 on에다가 카멜케이스 적용
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;