import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
export default class Navbar extends Component {
  render() {
    if (this.props.mode === "ActivityView") {
      return (
        <div className="navbar">
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.props.startInput}>
              Input Workout
            </Button>
            <Button bsStyle="primary" onClick={this.props.viewGraph}>
              Graph
            </Button>
          </ButtonToolbar>
        </div>
      );
    } else if (this.props.mode === "Graph") {
      return (
        <div className="navbar">
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.props.startInput}>
              Input Workout
            </Button>
            <Button bsStyle="primary" onClick={this.props.goback}>
              View Activities
            </Button>
          </ButtonToolbar>
        </div>
      );
    }
    return (
      <div className="navbar">
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.props.goback}>
            View Activities
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
