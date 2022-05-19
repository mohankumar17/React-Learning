import React, { Component } from "react";

//Class Component
class Welcome extends Component {
  /*render(){
        return <div>React Class Component</div>
    };*/

  render(props) {
    return <div>Hi, {this.props.name}</div>;
  }
}

export default Welcome;
