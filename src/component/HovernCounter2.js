import React, { Component } from "react";

class HovernCounter2 extends Component {
  render() {
    const { count, incrCount } = this.props;
    return (
      <div>
        <button onMouseOver={incrCount}>Click</button>
        <p>Clicked {count} Times</p>
      </div>
    );
  }
}

export default HovernCounter2;
