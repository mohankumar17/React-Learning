import React, { Component } from "react";

class CounterRenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return <div> {this.props.render(this.state.count, this.incrCount)} </div>;
  }
}

export default CounterRenderProps;
