import { useState } from "react";

export default function JestUnitTestPage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    setCount((prev) => prev + 1);
  }; // 페이지 주석

  return (
    <>
      <div role="count">{count}</div>
      <button role="count-button" onClick={onClickCountUp}>
        철수랑 놀러가기
      </button>
    </>
  );
}
