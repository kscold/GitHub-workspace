import { useCallback, useMemo, useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트가 렌더링 되었습니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0); // hooks들은 유지가 됨

  // 1. useMemo로 변수 기억
  const aaa = useMemo(() => Math.random(), []); // 리렌더링 될 때 마다 새로운 난수가 생성된다는 것을 알기 위하며 만듬 따라서 useMemo를 사용
  // 또한 특별한 의미가 없는 경우에 () 리턴까지 생략된 소괄호도 생략 가능하여 한줄로 처리함
  console.log(aaa);

  // 2. useCallback으로 함수를 기억
  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet +1
  }, []);

  // 3. useCallback 사용시 주의사항 => state 사용 주의
  const onClickCountState = useCallback((): void => {
    // console.log(countState + 1);
    // setCountState(countState + 1); // 이전의 값을 기억하기 때문에 useCallback으로 state를 다룰 시에 매우 위험
    setCountState((prev) => prev + 1); // 따라서 일전의 값을 저장하고 있는 prev에서 꺼내서 업데이트를 함
  }, []);

  // 4. useMemo로 나만의 useCallback 만들어보기
  // const onClickCountState2 = useMemo(() => {
  //   return (): void => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   };
  // }, []);

  return (
    <>
      <div>카운트(let): {countLet} </div>
      <button onClick={onClickCountLet}>카운트(let): +1 올리기</button>
      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state): +1 올리기</button>
      {/* <div>카운트(state): {countState}</div>
      <button
        onClick={useCallback((): void => {
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트(state): +1 올리기
      </button> */}
      {/* 로직과 UI가 합쳐져서 헷갈림 => 유지보수 힘듬, 메모이제이션 더 복잡함 유지 보수에 좋지 않기 때문에 이렇게 사용하는 것은 가급적 피하는 것이 좋음 */}
    </>
  );
}
