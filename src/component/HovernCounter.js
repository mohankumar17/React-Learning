import React, { Component } from "react";
import UpdateComponent from "./CounterHOC";

class HovernCounter extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.incrementCount}>Click</button>
        <p>
          ID: {this.props.id}, {this.props.name} Hovered {this.props.count}{" "}
          Times
        </p>
      </div>
    );
  }
}

export default UpdateComponent(HovernCounter, 10);
