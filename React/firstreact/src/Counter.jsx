import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정
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
        <h2>Not Change :{fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState({ fixedNumber: fixedNumber + 3 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
