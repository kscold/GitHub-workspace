import { Component } from "react";

export default class ClassCounterPage extends Component { // 리액트 기본 컴포넌트로 기능을 확장함
  state = {
    count: 0,
  };

  // this는 자기자신을 의미함
  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    })
  }

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
      </>
    )
  }
}

