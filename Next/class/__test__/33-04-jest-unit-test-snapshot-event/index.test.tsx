import JestUnitTestPage from "../../pages/section33/33-04-jest-unit-test-event/index";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // 가짜 DOM을 만들기 위해 사용

it("기존 사진이랑 바뀐게 없는지 비교해보자!! - 스냅샷 테스트", () => {
  render(<JestUnitTestPage />);

  fireEvent.click(screen.getByRole("count-button"));

  expect(screen.getByRole("count")).toHaveTextContent("1");
});
