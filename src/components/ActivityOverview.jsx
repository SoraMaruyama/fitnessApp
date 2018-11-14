import React, { Component } from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import _ from "lodash";
export default class ActivityOverview extends Component {
  render() {
    console.log("data", this.props.data);
    return (
      <div className="overview">
        <PageHeader>Your Workout History</PageHeader>
        <Grid>
          <Row>
            {this.props.data.map(function(obj, i) {
              return (
                <Col xs={12} md={8} key={i}>
                  <div className="item" key={i}>
                    <div>
                      {obj.date} | {obj.type} | {obj.minutes} min
                    </div>
                  </div>
                  <div className={"logo"}>
                    <img src={"./img/logo.png"} alt="" />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}
