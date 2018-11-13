import React, { Component } from "react";

export default class InputActivity extends Component {
  constructor() {
    super();
    this.minutes = undefined;
  }

  handleInput = e => {
    this.minutes = e.target.value;
  };

  callback = () => {
    return this.props.input(this.minutes);
  };
  render() {
    return (
      <div className="inputpage">
        <h3>How long did you Workout?</h3>
        <input onChange={this.handleInput} />
        <button onClick={this.callback}>save</button>
      </div>
    );
  }
}
