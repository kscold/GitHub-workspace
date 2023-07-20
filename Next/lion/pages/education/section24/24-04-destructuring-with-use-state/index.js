import { useState } from "react";

export default function CounterLetDocumentPage() {
  const result = useState(0); // 배열이기 때문에 구조분해 할당으로 따졌을 때 [result[0], result[1]] 이렇게 들어가는 것임

  function onClickCountUp() {
    result[1](result[0] + 1);
  }

  function onClickCountDown() {
    result[1](result[0] - 1);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
    </div>
  );
}
