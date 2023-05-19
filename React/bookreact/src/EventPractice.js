import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    }

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // } //화살표 문법으로 대체가능

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //target.value로 콘솔의 name을 업데이트 
        });
    }

    handleClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type='text'//문자열 설정
                    name='username' //박스 이름 설정
                    placeholder='사용자명' //박스 안에 문구
                    value={this.state.username}//박스 안에 입력되는 값
                    onChange={this.handleChange}
                />


                <input
                    type='text'//문자열 설정
                    name='message'
                    placeholder='아무거나 입력해 보세요' //박스 안에 문구
                    value={this.state.message}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleClick}>확인</button>
            </div >
        );
    }
}

export default EventPractice;