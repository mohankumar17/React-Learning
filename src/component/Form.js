import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }

  handleUserNameChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic} `);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserNameChange}
            ></input>
          </div>

          <br />
          <br />

          <div>
            <label>Comment: </label>
            <textarea
              type="text"
              value={this.state.comment}
              onChange={this.handleCommentChange}
            ></textarea>
          </div>

          <br />
          <br />

          <label>Topic: </label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>

          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
