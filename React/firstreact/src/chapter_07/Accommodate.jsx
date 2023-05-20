import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0); //커스텀훅을 useSate처럼 할당 조건이 없음

  //useEffect() hook의 작동방식을 알기 위해 일부로 두 개의 훅을 사용함
  useEffect(() => {
    console.log("======================");
    console.log("useEffect() is called.");
    console.log(`is Full: ${isFull}`);
  }); //의존성 배열이 없으므로 컴포넌트가 마운트 된 직후에 호출되며 이후 컴포넌트가 업데이트 될 때마다 호출됨

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]); //의존성 배열이 있는 useEffect()는 컴포넌트가 마운트 된 직후 호출되는데 count값이 변할 때만 업데이트 됨
  //setIsFull state로 용량이 가득찼는지 안찼는지 확인하기 위해 isFULL 변수에 저장

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
