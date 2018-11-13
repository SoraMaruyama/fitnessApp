import React, { Component } from "react";
import Navbar from "./Navbar";
import ActivityOverview from "./ActivityOverview";
import InputActivity from "./InputActivity";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentMode: "ActivityView",
      activities: []
    };
  }

  addActivity = minutes => {
    this.setState({
      currentMode: "ActivityView",
      activities: [
        ...this.state.activities,
        {
          date: new Date().toLocaleDateString(),
          type: "workout",
          minutes: Number(minutes)
        }
      ]
    });

    localStorage.setItem("activities", this.state.activities);
    console.log("localStorage=", localStorage);
  };

  switchToInput = () => {
    this.setState({ currentMode: "Input" });
  };

  backToActivities = () => {
    this.setState({ currentMode: "ActivityView" });
  };

  render() {
    if (this.state.currentMode === "ActivityView") {
      return (
        <div className="app">
          <Navbar
            mode={this.state.currentMode}
            switchmode={this.switchToInput}
          />
          <ActivityOverview activity={this.state.activities} />
        </div>
      );
    }

    return (
      <div>
        <Navbar mode={this.state.currentMode} goback={this.backToActivities} />
        <InputActivity mode={this.state.currentMode} input={this.addActivity} />
      </div>
    );
  }
}
