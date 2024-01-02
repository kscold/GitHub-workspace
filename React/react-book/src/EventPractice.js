// import { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: '',
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({ message: '' });
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// 미리 함수를 만들어서 정의
import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  constructor(props) {
    // props 생성자 정의
    super(props); // props 객체 오버라이딩
    this.handleChange = this.handleChange.bind(this); // 현재 컴포넌트의 객체 state를 바운딩
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
