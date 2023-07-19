import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component { // 리액트 기본 컴포넌트로 기능을 확장함
  state = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("그려지고 나서 실행!!")
  }

  componentDidUpdate(): void {
    console.log("변경되고 나서 실행!!")
  }

  componentWillUnmount(): void {
    console.log("사라지기 전에 실행!!")
    // 예) 채팅방 나가기 API
  }

  // this는 자기자신을 의미함
  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    })
  }

  onClickMove = (): void => {
    void Router.push("/");
  }

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
        <button onClick={this.onClickMove}>나가기!!</button>
      </>
    )
  }
}

