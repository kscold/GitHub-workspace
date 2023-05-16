import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello, my name is {name}!<br />
        children value is {children}!<br />
        my favorite number is {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
