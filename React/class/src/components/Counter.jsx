import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onClickUp = () => setCount(count + 1);
  const onClickDown = () => setCount(count - 1);
  return (
    <div>
      <button onClick={onClickUp}>+</button>
      <button onClick={onClickDown}>-</button>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
