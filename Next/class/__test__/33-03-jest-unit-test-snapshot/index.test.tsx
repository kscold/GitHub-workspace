import JestUnitTestPage from "../../pages/section33/33-03-jest-unit-test-snapshot/index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // 가짜 DOM을 만들기 위해 사용

it("기존 사진이랑 바뀐게 없는지 비교해보자!! - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);

  expect(result.container).toMatchSnapshot();
  // 결과가 어떻게 나왔는지 snap 샷을 찍음 즉 저장
  // 따라서 이 저장 값을 가지고 바뀐 값과 비교를 함 업데이트를 하기 위해서는
  // yarn test -u
});
