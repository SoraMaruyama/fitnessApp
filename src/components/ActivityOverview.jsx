import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import _ from "lodash";
export default class ActivityOverview extends Component {
  render() {
    console.log("data", this.props.data);
    return (
      <div className="overview">
        <h3>Your Activities</h3>
        <Grid>
          <Row>
            {this.props.data.map(function(obj, i) {
              return (
                <Col xs={12} md={8} key={i}>
                  <p className="item" key={i}>
                    <div>
                      {obj.date} | {obj.type} | {obj.minutes} min
                    </div>
                  </p>
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
