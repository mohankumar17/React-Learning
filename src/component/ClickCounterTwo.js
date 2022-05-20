import React, { Component } from "react";

class ClickCounterTwo extends Component {
  render() {
    const { count, incrCount } = this.props;
    return (
      <div>
        <button onClick={incrCount}>Click</button>
        <p>Clicked {count} Times</p>
      </div>
    );
  }
}

export default ClickCounterTwo;
