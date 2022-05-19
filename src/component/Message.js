import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Visitor",
    };
  }

  addSub() {
    this.setState({
      message: "Thanks for subscibing",
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <button onClick={() => this.addSub()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
