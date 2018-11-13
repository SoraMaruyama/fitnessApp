import React, { Component } from "react";
import {
  Button,
  ButtonToolbar,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

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
      <form>
        <FormGroup controlId="form">
          <ControlLabel>How long did you Workout?</ControlLabel>
          <FormControl onChange={this.handleInput} />
        </FormGroup>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.callback}>
            SAVE
          </Button>
        </ButtonToolbar>
      </form>
    );
  }
}
