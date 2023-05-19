// import React, { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         username: '',
//         message: ''
//     }

//     // constructor(props) {
//     //     super(props);
//     //     this.handleChange = this.handleChange.bind(this);
//     //     this.handleClick = this.handleClick.bind(this);
//     // } //화살표 문법으로 대체가능

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value //target.value로 콘솔의 name을 업데이트 
//             //key를 []로 감싸면 그 안에 넣은 래퍼런스가 가리키는 실제 값이 key값으로 사용됨
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ": " + this.state.message);
//         this.setState({
//             username: '',
//             message: ''
//         });
//     }

//     handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type='text'//문자열 설정
//                     name='username' //박스 이름 설정
//                     placeholder='사용자명' //박스 안에 문구
//                     value={this.state.username}//박스 안에 입력되는 값
//                     onChange={this.handleChange}
//                 />


//                 <input
//                     type='text'//문자열 설정
//                     name='message'
//                     placeholder='아무거나 입력해 보세요' //박스 안에 문구
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />

//                 <button onClick={this.handleClick}>확인</button>
//             </div >
//         );
//     }
// }

// export default EventPractice;
//여기까지 클래스 컴포넌트로 구현

// 

import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form;
    const onChange = e => {
        setTimeout(() => console.log(e), 500);
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어씌우기
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="유저명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};
export default EventPractice;