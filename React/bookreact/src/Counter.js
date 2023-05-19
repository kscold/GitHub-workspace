import React, { Component } from 'react';

class Counter extends Component {

    state = {
        number: 0,
        fixedNumber: 0
    }; //비구조화 할당을 시켰으므로 constructor와 super를 안쓰고 state를 설정할 수 있음
    // constructor(props) {
    //     super(props); //class 컴포넌트의 기본 문법
    // this.state = { //state의 초깃값 설정
    //     number: 0, //number 변수에 초깃값 설정
    //     fixedNumber: 0
    // };
    // }

    render() {
        const { number, fixedNumber } = this.state; // 비구조화 할당으로 number = this.state 저장 함수 컴포넌트에서는 useState를 사용
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={() => {
                    // this.setState({ number: number + 1 }); //.setSate()를 사용하여 state에 새로운 값을 넣을 수 있음
                    // this.setState({ number: this.state.number + 1 }); //this,setSate를 사용하여 state에 새로운 값을 넣을 수 있음 위에 코드와 같음
                    // //왜냐하면 this.setSate를 사용한다고 해서 state값이 바로 바뀌지는 않기 때문에 따라서 화살표 함수를 setState에 사용

                    // this.setState((prevState) => {
                    //     return { number: prevState.number + 1 };
                    // }); //화살표함수를 사용하여 prevState를 업데이트 하여 화면에 표시
                    // this.setState(prevState => ({ number: prevState + 1 })); //위에 코드와 완전이 같은 코드 그러나 return 대신 ()를 사용

                    this.setState(
                        {
                            number: number + 1
                        },
                        () => {
                            console.log('방금 setSate가 호출되었습니다.');
                            console.log(this.state);
                        }
                    )
                }}
                >
                    +1
                </button>
            </div>
        );//버튼 클릭을 할때 nunbmer식만 업데이트 되므로 바뀌지 않음
    }
}

export default Counter;