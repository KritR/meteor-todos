import React, { Component } from "react";
import "./App.css";
import * as d3 from "d3";
import { select } from "d3-selection";

const [width, height] = [window.innerWidth / 2, window.innerHeight];

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const EARTH_HEIGHT = 50;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

class MeteorDiagram extends Component {
  constructor(props) {
    super(props);
    this.createMeteorDiagram = this.createMeteorDiagram.bind(this);
  }
  componentDidMount() {
    this.createMeteorDiagram();
  }
  componentDidUpdate() {
    this.createMeteorDiagram();
  }

  createMeteorDiagram() {
    const svg = this.node;
    select(svg).selectAll("*").remove();
    const nodes = this.props.todos
      .filter((d) => !d.isComplete)
      .map((d) => {
        return { ...d, radius: d.priority * 20 };
      })
      .map((d) => Object.create(d));

    const simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-80))
      .force("x", d3.forceX(width / 2).strength(0.03))
      .force(
        "y",
        d3.forceY(
          (d) =>
            (5 * height) / 6 -
            (height / 6) *
              Math.log(Math.max(dateDiffInDays(new Date(), d.startDate), 0.8))
        )
      )
      .force(
        "collide",
        d3.forceCollide().radius((d) => d.radius)
      );

    const node = select(svg)
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .attr("fill", "bisque")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d) => d.radius);

    select(svg)
      .append("circle")
      .attr("cx", "50%")
      .attr("cy", height + (width / 2) - EARTH_HEIGHT)
      .attr("r", width / 2)
      .style("fill", "green");

    const label = select(svg)
      .selectAll(".mytext")
      .data(nodes)
      .enter()
      .append("text")
      .text(function (d) {
        return d.eventTitle;
      })
      .style("text-anchor", "middle")
      .style("fill", "#0e0")
      .style("font-family", "Arial")
      .style("font-size", 14);

    simulation.on("tick", () => {
      /*
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
    */

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      label
        .attr("x", function (d) {
          return d.x;
        })
        .attr("y", function (d) {
          return d.y - d.radius - 10;
        });
    });
  }
  render() {
    return (
      <svg
        ref={(node) => (this.node = node)}
        width="50%"
        height="100%"
      ></svg>
    );
  }
}
export default MeteorDiagram;
