import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0)); //카운트의 값이 0 아래로 내려가는 것을 방지
  return [count, increaseCount, decreaseCount];
}

export default useCounter;
