// import React from 'react';

// //import MyComponent from "./MyComponent";
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';

// const App = () => {
//   return (
//     <div>
//       {/* <ScrollBox ref={(ref) => this.scrollBox = ref} />
//       <button onClick={() => this.scrollBox.scrollToBottom()}>
//         맨 밑으로
//       </button> */}
//       <IterationSample />
//     </div>
//   )
//   // 클래스 컴포넌트는 ref 함수를 달아서 이벤트를 사용
//   //return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>//컴포넌트 태그 사이의 내용을 보여주는 props를 children이라고 함
//   //props 지정할려면 name =""
//   //현재 string타입으로 PropTypes를 지정해놓았으므로 {3}이면 오류
//   //favoriteNumber를 PropTypes.number.isRequired로 지정해놓았기 때문에 파라미터가 없으면 오류 메시지를 띄움
// };

// export default App;

// import React, { Component } from 'react';
// import ScrollBox from './ScrollBox';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => this.scrollBox = ref} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;