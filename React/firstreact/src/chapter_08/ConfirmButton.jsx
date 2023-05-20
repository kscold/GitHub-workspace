// import React, { Component } from "react";

// class ConfirmButton extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isConfirmed: false,
//     };

//     //this.handleConfirm = this.handleConfirm.bind(this);
//   }

//   handleConfirm = () => {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   }; //화살 함수로 변경

//   //   handleConfirm() {
//   //     this.setState((prevState) => ({
//   //       isConfirmed: !prevState.isConfirmed,
//   //     }));
//   //   } //기본적 형식(함수안의 함수 호출) 대신 이 방식은 constructor에서 bind로 묶어줘야됨

//   render() {
//     return (
//       <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

// export default ConfirmButton;
//여기까지 클래스 컴포넌트로 사용하는 방식

import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prvIsConfirmed) => !prvIsConfirmed); //false를 true로 설정
  }; //이벤트 함수 정의

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;
