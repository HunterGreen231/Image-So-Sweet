import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="page-content">
        <h1>Home</h1>
        <div
          style={{ height: "2000px", backgroundColor: "red", width: "100%" }}
        />
        <div
          style={{ backgroundColor: "blue", height: "900px" }}
          id="bottom"
          ref={ref => {
            this.contactComponent = ref;
            // Dispatch ref to redux
          }}
        />
      </div>
    );
  }
}
