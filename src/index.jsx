import React from "react";
import { render } from "react-dom";
import "./index.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = [];
    this.clicked = false;
  }

  addActivity = e => {
    const minutes = e.target.value;
    this.setState([
      ...this.state,
      { date: Date.now(), type: "workout", minutes: minutes }
    ]);
  };

  goToAddActivityPage = e => {
    this.clicked = true;
  };

  render() {
    return (
      <div id="top">
        <h3>Your this Week's Activity</h3>
        <button class="add-new-log" onClick={this.goToAddActivityPage} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
