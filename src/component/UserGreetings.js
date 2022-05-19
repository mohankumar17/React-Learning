import React, { Component } from "react";

export class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  //   render() {
  //     if (this.state.isLoggedIn) {
  //       return (
  //         <div>
  //           <div>Welcome Mohan</div>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div>
  //           <div>Welcome Guest</div>
  //         </div>
  //       );
  //     }
  //   }

  //   render() {
  //     let message;
  //     if (this.state.isLoggedIn) {
  //       message = <div>Welcome Mohan</div>;
  //     } else {
  //       message = <div>Welcome Guest</div>;
  //     }
  //     return <div>{message}</div>;
  //   }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Mohan</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreetings;
