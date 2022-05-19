import React, { Component } from "react";

export class LifeCycleUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mohan",
    };
    //console.log("LifeCycle Mount Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    //console.log("LifeCycle Mount getDerivedStateFromProps");
    console.log("LifeCycle Update getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("LifeCycle Update shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("LifeCycle Update getSnapshotBeforeUpdate");
    return null;
  }

  /*componentDidMount() {
    console.log("LifeCycle Mount componentDidMount");
  }*/

  componentDidUpdate() {
    console.log("LifeCycle Update componentDidUpdate");
  }

  handleClick = () => {
    this.setState({
      name: "Paul",
    });
  };

  render() {
    //console.log("LifeCycle Mount Render");
    console.log("LifeCycle Update Render");
    return (
      <div>
        <div>LifeCycle Update</div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default LifeCycleUpdate;
