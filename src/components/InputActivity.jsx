import React, { Component } from "react";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export default class InputActivity extends Component {
  constructor() {
    super();
    this.minutes = undefined;
    this.type = undefined;
  }

  handleMinutesInput = e => {
    this.minutes = e.target.value;
  };

  handleTypeInput = e => {
    this.type = e.target.value;
  };

  handleChange = () => {
    return this.props.input(this.minutes, this.type);
  };

  render() {
    return (
      <form>
        <FormGroup controlId="type">
          <ControlLabel>What kind of workout did you do? (text)</ControlLabel>
          <FormControl
            type="text"
            bsSize="sm"
            placeholder="Enter text"
            onChange={this.handleTypeInput}
          />
        </FormGroup>
        <FormGroup controlId="minutes">
          <ControlLabel>How long did you workout? (min)</ControlLabel>
          <FormControl
            type="text"
            bsSize="sm"
            placeholder="Enter text"
            onChange={this.handleMinutesInput}
          />
        </FormGroup>
        <Button type="submit" onClick={this.handleChange}>
          SAVE
        </Button>
      </form>
    );
  }
}
