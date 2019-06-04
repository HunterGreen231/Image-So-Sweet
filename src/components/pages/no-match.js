import React, { Component } from "react";

export default class NoMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="page-content">
        <h1>No Match</h1>
      </div>
    );
  }
}
