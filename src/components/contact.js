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
          <input name="firstName" />
          <input name="lastName" />
          <input name="email" />
          <input name="phoneNumber" />
          <input name="highSchool" />
          <input name="seniorYear" />
          <input name="seniorName" />
          <input name="referredBy" />
          <textarea name="message" />
          <button type="submit">Send Mail</button>
        </form>
      </div>
    );
  }
}
