import React, { Component } from "react";
import Navbar from "./Navbar";
import BarChart from "./BarChart.js";
import ActivityOverview from "./ActivityOverview";
import InputActivity from "./InputActivity";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentMode: "ActivityView",
      activities: JSON.parse(localStorage.getItem("activities")) || []
    };
  }
  addActivity = minutes => {
    this.setState(
      {
        currentMode: "ActivityView",
        activities: [
          {
            date: new Date().toLocaleDateString(),
            type: "workout",
            minutes: Number(minutes)
          },
          ...this.state.activities
        ]
      },
      () => {
        localStorage.setItem(
          "activities",
          JSON.stringify(this.state.activities)
        );
      }
    );
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
          <ActivityOverview
            mode={this.state.currentMode}
            data={this.state.activities}
          />
          <BarChart
            mode={this.state.currentMode}
            data={this.state.activities}
          />
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
