import { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정한 부분

  constructor(props) {
    // 생성자(생성될 때)
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출됨
    // props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용함
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      // 부모한테 받은 color 값을 state에 동기화(부모의 랜덤 color 현재의 null color)
      return { color: nextProps.color }; // 부모의 랜덤 color를 설정
    }
    return null;
  }

  componentDidMount() {
    // 처음 렌더링을 마친 후 실행함
    console.log('componetDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 현재 컴포넌트 state의 number 숫자의 마지막 자리가 4면 리렌더링하지 않음
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    // 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
    // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 이것을 compoentDidUpdate에서 조회할 수 있음
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;

// App.js
// import { Component } from 'react';
// import LifeCycleSample from './7.LifeCylce/LifeCycleSample';
// import ErrorBoundary from './7.LifeCylce/ErrorBoundary';

// // 랜덤 색상을 생성함
// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#000000',
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// export default App;
