import React, { Component } from "react";
//import PureComp from "./PureComp";
//import RegularComp from "./RegularComp";
import MemoComp from "./MemoComp";

class ParentComp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mohan",
    };
  }

  componentDidMount() {
    /*setInterval(() => {
      this.setState({
        name: "Paul",
      });
    }, 2000); */
  }

  render() {
    console.log("*******Parent Component Render******");
    return (
      <div>
        ParentComp - {this.state.name}
        {/* <RegularComp></RegularComp>
        <PureComp></PureComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp2;
