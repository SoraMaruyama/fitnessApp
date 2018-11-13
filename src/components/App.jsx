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
    this.sum = JSON.parse(localStorage.getItem("activities")).reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
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

    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // this.sum = this.state.activities.reduce(reducer);
  };

  switchToInput = () => {
    this.setState({ currentMode: "Input" });
  };

  switchToGraph = () => {
    this.setState({ currentMode: "Graph" });
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
            startInput={this.switchToInput}
            viewGraph={this.switchToGraph}
          />
          <ActivityOverview
            sum={this.sum}
            mode={this.state.currentMode}
            data={this.state.activities}
          />
        </div>
      );
    } else if (this.state.currentMode === "Graph") {
      return (
        <div className="app">
          <Navbar
            mode={this.state.currentMode}
            startInput={this.switchToInput}
            goback={this.backToActivities}
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
