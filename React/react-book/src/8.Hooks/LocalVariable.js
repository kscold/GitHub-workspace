// 클래스 컴포넌트에서 로컬 변수를 사용하는 예시
// import { Component } from 'react';

// class RefSampleClass extends Component {
//   id = 1;
//   setId = (n) => {
//     // 자바의 setter와 비슷
//     this.id = n;
//   };
//   printId = () => {
//     console.log(this.id);
//   };
//   render() {
//     return <div>MyComponent</div>;
//   }
// }

// 함수형 컴포넌트로 작성한 예시
import React from 'react';

const RefSampleHooks = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };

  return <div>refsample</div>;
};

export default RefSampleHooks;
