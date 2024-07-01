import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onClickUp = () => setCount((prev) => prev + 1);
  const onClickDown = () => setCount((prev) => prev - 1);

  return (
    <div>
      <button onClick={onClickUp}>+</button>
      <button onClick={onClickDown}>-</button>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
