import React from "react";

const UpdateComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    /*incrCount = () => {
        this.setState((prevState) => {
          return { count: prevState.count + incrementNumber };
        });
      };*/

    incrCount = () => {
      this.setState({
        count: this.state.count + incrementNumber,
      });
    };

    render() {
      return (
        <OriginalComponent
          //id={this.props.id}
          name="Mohan"
          count={this.state.count}
          incrementCount={this.incrCount}
          {...this.props}
        ></OriginalComponent>
      );
    }
  }
  return NewComponent;
};

export default UpdateComponent;
