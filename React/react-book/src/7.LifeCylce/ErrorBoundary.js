import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) {
      // error가 true 이면
      return <div>에러가 발생했습니다!</div>; // 문구를 렌더링
    }
    return this.props.children; // error가 false이면 children 컴포넌트를 렌더링
  }
}

export default ErrorBoundary;
