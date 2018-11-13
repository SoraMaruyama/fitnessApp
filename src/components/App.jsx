import React, { Component } from "react";
import Navbar from "./Navbar";
import ActivityView from "./ActivityOverview";
import InputActivity from "./InputActivity";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentMode: "ActivityView",
      activities: []
    };
  }

  addActivity(e) {
    const minutes = e.target.value;
    this.setState([
      ...this.state,
      { date: Date.now(), type: "workout", minutes: minutes }
    ]);
  }

  switchToInput() {
    this.setState({ currentMode: "Input" });
  }

  backToActivities() {
    this.setState({ currentMode: "ActivityView" });
  }

  render() {
    if (this.state.currentMode === "ActivityView") {
      return (
        <div className="app">
          <Navbar mode={this.currentMode} inputmode={this.switchToInput} />
          <ActivityView />
        </div>
      );
    }

    return (
      <div>
        <Navbar mode={this.currentMode} goback={this.backToActivities} />
        <InputActivity input={this.addActivity} />
      </div>
    );
  }
}
