import JestUnitTestPage from "../../pages/section33/33-04-jest-unit-test-event/index";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // 가짜 DOM을 만들기 위해 사용

it("버튼을 눌렀을 때, 제대로 작동하는지 테스트하자!", () => {
  render(<JestUnitTestPage />);

  screen.getByRole("count-button");
  fireEvent.click(screen.getByRole("count-button"));

  expect(screen.getByRole("count")).toHaveTextContent("1");
});
