import { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // 위의 코드는 밑의 두 둘과 같은 말을 의미함(비구조화 할당)
    // const scrollHeight = this.box.scrollHeight;
    // const clientHeight = this.box.clientHeight;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto', // 스크롤바를 만듬
      position: 'relative',
    };
    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)', // 흰색부터 검은색까지 그라데이션 막대를 배경으로 설정
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref; // box와 같은 이름은 맘대로 지정 가능
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
