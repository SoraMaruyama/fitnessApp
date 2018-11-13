import React, { Component } from "react";
import _ from "lodash";
export default class ActivityOverview extends Component {
  render() {
    console.log("this.props.activity=", Array.isArray(this.props.activity));
    return (
      <div className="overview">
        <h3>Your Activities</h3>
        {this.props.activity.map(function(obj, i) {
          return (
            <div className="activities">
              <div>NO.{i}</div>
              <div>Date:{obj.date}</div>
              <div>Type:{obj.type}</div>
              <div>Duration(min):{obj.minutes}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
