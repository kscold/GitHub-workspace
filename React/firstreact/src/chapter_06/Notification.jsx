import React from "react";

const styles = {
  wrapper: {
    margin: 9,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`); //로그를 아이디와 함께 출력하도록 역따옴표를 사용해야됨
  } //생명주기 함수

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} componentDidWillUmount() called.`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
