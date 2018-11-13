import _ from "lodash";
export default class ActivityOverview extends Component {
  render() {
    return (
      <div className="overview">
        <h3>Your Activities</h3>
        {this.props.activities.map(function(obj, i) {
          return (
            <div className="activities">
              <div>NO.{i}</div>
              <div>Date:{obj.date}</div>
              <div>Type:{obj.type}</div>
              <div>Duration:{obj.minutes}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
