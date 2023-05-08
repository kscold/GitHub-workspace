import { useState } from "react" //useSate를 사용하기 위한 임포트

function App() {
  const [counter, setValue] = useState(0); //데이터 값과 데이터 업데이트 값 설정 시작 데이터는 0으로
  const onClick = () => setValue((prev) => prev + 1); //클릭했을 때, setValue를 없데이트 prev 변수는 딱히 선언을 안해도됨
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
