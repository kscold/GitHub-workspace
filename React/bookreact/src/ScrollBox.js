import React, { Component } from 'react';

class ScrollBox extends Component {

    scrollToBottom = () => { //이벤트 핸들링 constructor을 안쓰기 위해 화살표 함수 사용
        const { scrollHeight, clientHeight } = this.box //클래스 컴포넌트 비구조화 할당
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px', //height 크기가 300인데 650px로 설정했으므로 기본적으로 스크롤바가 생김
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => { this.box = ref }}>
                <div style={innerStyle} />
            </div>
        );//this.box에 ref객체를 집어 넣음
    }
}

export default ScrollBox;