import { useState, useEffect } from "react" //useSate를 사용하기 위한 임포트 + useEffects는 useSate와 달리 argument가 두 개

function App() {
  const [counter, setValue] = useState(0); //데이터 값과 데이터 업데이트 값 설정 시작 데이터는 0으로 0으로 정했으므로 모디파이어가 int
  const [keyword, setKeyword] = useState("") //모디파이어가 문자열을 기본으로 넣었으므로 string 형
  const onClick = () => setValue((prev) => prev + 1); //클릭했을 때, setValue(modifier)를 없데이트 prev 변수는 딱히 선언을 안해도됨
  const onChange = (event) => setKeyword(event.target.value); //변하는 이벤트 값의 벨류를 setKeyword(modifier)에 넣는다.

  useEffect(() => { //state가 변할 때 마다 실행되는 것을 방지하기 위해서 처음 한번 뒤로는 실행되지 않음 []이 비어있기 때문에
    console.log("I run only once.");
  }, []);

  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) { //문자 입력이 없고 문자열 길이가 5보다 크지 않으면 검색 안함
  //     console.log("I run when 'keyword' changes.", keyword);
  //   }
  // }, [keyword]); //처음 한번을 제외하고는 keyword만 변화 할 때만 실행됨

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
