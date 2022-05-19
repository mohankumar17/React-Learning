import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //count: this.props.initValue,
      count: 0,
    };
  }

  incrementCount() {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Count State Updated");
      }
    );

    /*this.setState((prevState) => ({
      count: prevState.count + 1,
    }));*/
  }

  /*incrementThree(){
      this.incrementCount();
      this.incrementCount();
      this.incrementCount();
  }*/

  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={() => this.incrementCount()}>+</button>
        {/* <button onClick={() => this.incrementThree()}>+</button> */}
      </div>
    );
  }
}

export default Counter;
