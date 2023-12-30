import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props); // props를 오버라이딩

    // state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }); // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
