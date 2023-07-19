// // 1. 함수를 리턴하는 함수
// function aaa() {
//   const apple = 10;

//   function bbb() {
//     // 이름이 없어도 잘 됨
//     const banana = 20;
//     console.log(banana);
//     console.log(apple);
//     console.log(qqq);
//   }
// }

// aaa();

// 2. 함수를 리턴하는 함수 - 인자
// function aaa(apple) {
//   return function (banana) {
//     console.log(banana);
//     console.log(apple);
//   };
// }

// aaa(100)(500); // 사용방법

// 변화하는 과정 {return} 사이에 아무것도 없으면 ()로 생략 가능하고 ()도 큰의미 없으면 생략가능
// const aaa =(apple)=>{
//     return (banana){
//         console.log(banana);
//         console.log(apple);
//     }
// }

//3. 함수를 리턴하는 함수
// const aaa = (apple) => (banana) => {
//   console.log(banana);
//   console.log(apple);
// };
// bbb(50)(60);

// 4. 함수를 리턴하는 함수 - 인자 여러개
const ccc = (apple) => (banana) => (tomato) => (orange) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
  console.log(orange);
};

ccc(10)(20)(30)(40);
