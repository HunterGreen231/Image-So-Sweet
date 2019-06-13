import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="contact-wrapper">
        <h1 style={{ paddingTop: "60px" }}>Contact Section</h1>
        <form>
          <input />
          <input />
          <input />
          <input />
        </form>
      </div>
    );
  }
}
