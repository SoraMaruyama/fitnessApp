import React, { Component } from "react";
import Navbar from "./Navbar";
import BarChart from "./BarChart.js";
import ActivityOverview from "./ActivityOverview";
import InputActivity from "./InputActivity";
import { Grid, Row, Col, PageHeader, Image } from "react-bootstrap";
// import logo from "./img/logo.png";

// console.log(logo);
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
  addActivity = (minutes, type) => {
    console.log("add activity started!");
    this.setState(
      {
        currentMode: "ActivityView",
        activities: [
          {
            date: new Date().toLocaleDateString(),
            type: type,
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
          <Grid>
            <Row>
              <Col>
                <PageHeader>Fitness</PageHeader>
                {/* <Image src="./img/logo.png" rounded /> */}
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <Col>
                <Navbar
                  mode={this.state.currentMode}
                  startInput={this.switchToInput}
                  viewGraph={this.switchToGraph}
                />
              </Col>
            </Row>
          </Grid>
          <div>
            <Grid>
              <Row>
                <Col>
                  <ActivityOverview
                    sum={this.sum}
                    mode={this.state.currentMode}
                    data={this.state.activities}
                  />
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      );
    } else if (this.state.currentMode === "Graph") {
      return (
        <div className="app">
          <Grid>
            <Row>
              <Col>
                <PageHeader>Fitness</PageHeader>
                {/* <Image src="./img/logo.png" rounded /> */}
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <Col>
                <Navbar
                  mode={this.state.currentMode}
                  startInput={this.switchToInput}
                  goback={this.backToActivities}
                />
              </Col>
            </Row>
          </Grid>
          <div>
            <Grid>
              <Row>
                <Col>
                  <BarChart
                    mode={this.state.currentMode}
                    data={this.state.activities}
                  />
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      );
    }

    return (
      <div className="app">
        <Grid>
          <Row>
            <Col>
              <PageHeader>Fitness</PageHeader>
              {/* <Image src="./img/logo.png" rounded /> */}
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col>
              <Navbar
                mode={this.state.currentMode}
                goback={this.backToActivities}
              />
            </Col>
          </Row>
        </Grid>
        <div>
          <Grid>
            <Row>
              <Col>
                <InputActivity
                  mode={this.state.currentMode}
                  input={this.addActivity}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
