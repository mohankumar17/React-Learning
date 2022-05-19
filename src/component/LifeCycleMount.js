import React, { Component } from "react";

export class LifeCycleMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mohan",
    };
    console.log("LifeCycle Mount Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle Mount getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle Mount componentDidMount");
  }

  render() {
    console.log("LifeCycle Mount Render");
    return <div>LifeCycleMount</div>;
  }
}

export default LifeCycleMount;
