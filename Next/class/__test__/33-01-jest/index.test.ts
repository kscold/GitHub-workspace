import { add } from "../../pages/section33/33-01-jest/index";

it("더하기 잘 되는지 테스트 해보기", () => {
  // it으로 테스트
  const result = add(3, 5);
  expect(result).toBe(8); // 기대값
});

// describe("나만의 테스트그룹 만들기", () => { // 그룹으로 묶기
//   it("더하기 테스트",() =>{

//   });
//   it("빼기 테스트",() =>{

//   });
//   it("곱하기 테스트",() =>{

//   });
// });
