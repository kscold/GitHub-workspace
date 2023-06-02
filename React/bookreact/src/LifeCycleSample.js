import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; //ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    } //생성자

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null; //state가 반환될 필요가 없다면 null을 반환
    } //getDerivedStateFromProps props로 받아 온 값을 state에 동기화 시키는 용도로 사용, 컴포넌트가 마운트 될 때와 업데이트 될 때 호출

    componentDidMount() {
        console.log('componentDidMount')
    }//컴포넌트를 만들고, 첫 랜더링을 다 마친 후 실행함. 이 안에 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록,
    //setTimeout, setInterval, 네트워크 요청같은 비동기 작업을 처리 즉, 첫 생성자 후 마운트 실행

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4; //숫자의 마지막 자리가 4면 리렌더링 하지 않음 ===면 true인데  !==면 false이므로 리렌더링 안함
    }// props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 매서드로 반드시 true false 값을 반환해야됨

    componentWillUnmount() {
        console.log('componentWillUmount');
    }//컴포넌트를 DOM에서 제거할 때 실행 componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 실행 즉, 업마운트 삭제

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        }); //setState를 통해서 값을 없데이트
    }//핸들링 함수 선언 화살표함수로 constructor를 만들지 않아도 됨

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }//render에서 만들어진 결과물이 브러우저에 실제로 반영되기 직전에 호출, 이 매서드에서 반환하는 값은 componentDidUpdate에서 세번제 파라미터인
    //snapshot값으로 전달

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    } //리렌더링을 완료한 후 실행 업데이트가 끝난 직후이므로 DOM관련 처리를 해도 무방, prevProps, prevState 사용하여 컴포넌트가 이전에 가졌던
    //데이터에 접근 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot를 전달 받을 수 있음

    render() {
        console.log('render')

        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>colorL {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;