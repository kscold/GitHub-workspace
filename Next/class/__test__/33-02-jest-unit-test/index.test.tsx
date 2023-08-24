import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // 가짜 DOM을 만들기 위해 사용

// jest는 핵심 기능만 테스트하는 것이 좋음
it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />); // 그려지게 만듬

  const myTest = screen.getByText("철수는 13살 입니다.");
  expect(myTest).toBeInTheDocument();

  const myTest2 = screen.getByText("철수의 취미 입력하기:");
  expect(myTest2).toBeInTheDocument();

  const myTest3 = screen.getByText("철수랑 놀러가기");
  expect(myTest3).toBeInTheDocument();
});
