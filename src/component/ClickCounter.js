import React, { Component } from "react";
import UpdateComponent from "./CounterHOC";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>Click</button>
        <p>
          ID: {this.props.id}, {this.props.name} Clicked {this.props.count}{" "}
          Times
        </p>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter, 5);
