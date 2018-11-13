import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    if (this.props.mode === "ActivityView") {
      return (
        <div className="navbar">
          <button onClick={this.props.switchmode}>Input Workout</button>
        </div>
      );
    }
    return (
      <div className="navbar">
        <button onClick={this.props.goback}>View Activities</button>
      </div>
    );
  }
}
