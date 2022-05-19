import React, { Component } from "react";
import ForwardRef from "./ForwardRef";

class ForwardRefParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardRef ref={this.inputRef}></ForwardRef>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ForwardRefParent;
