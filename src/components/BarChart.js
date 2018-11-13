import React, { Component } from "react";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.workoutTime = this.props.data.map(obj => obj.minutes);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    console.log("d3=", d3);
    const node = this.node;
    const dataMax = d3.max(this.workoutTime);
    const yScale = d3
      .scaleLinear()
      .domain([0, dataMax])
      .range([0, 100]);

    d3.select(node)
      .selectAll("rect")
      .data(this.workoutTime)
      .enter()
      .append("rect");

    d3.select(node)
      .selectAll("rect")
      .data(this.workoutTime)
      .exit()
      .remove();

    d3.select(node)
      .selectAll("rect")
      .data(this.workoutTime)
      .style("fill", "#fe9922")
      .attr("x", (d, i) => i * 30)
      .attr("y", d => 100 - yScale(d))
      .attr("height", d => yScale(d))
      .attr("width", 25);
  }

  render() {
    return <svg ref={node => (this.node = node)} width={1000} height={600} />;
  }
}

export default BarChart;
