export default function MapElPage(): JSX.Element {
  // 1. 기본 방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    // for 문과 같이 사용
    console.log("el: ", el);
    console.log("index: ", index);
  });

  // 2. 매개변수 변경한 방법
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("el: ", asdf);
    console.log("index: ", qwer);
  });

  // 3. 함수선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("el: ", asdf);
    console.log("index: ", qwer);
  });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    // 매개변수 위치가 중요한 것이기 때문에
    // 첫번째 파라미터에는 철수, 두번째 파라미터에는 index가 들어옴
    console.log("el: ", el);
    console.log("index: ", index);
  });

  return <></>;
}
