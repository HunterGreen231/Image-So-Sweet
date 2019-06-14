import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-background" />
        <div className="contact-content">
          <h1>Contact</h1>
          <form className="form-wrapper">
            <div className="three-column">
              <input
                name="firstName"
                placeholder="First Name"
                className="input-field"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="input-field"
              />
              <input name="email" placeholder="Email" className="input-field" />
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                className="input-field"
              />
              <input
                name="fantasyTheme"
                placeholder="Fantasy Theme"
                className="input-field"
              />
              <input
                name="location"
                placeholder="Location"
                className="input-field"
              />
            </div>
            <div className="two-column">
              <input
                name="childsName"
                placeholder="Child's Name"
                className="input-field"
              />
              <input
                name="referredBy"
                placeholder="Referred By"
                className="input-field"
              />
            </div>
            <textarea name="message" placeholder="Message" />
            <button type="submit">Send Mail</button>
          </form>
        </div>
      </div>
    );
  }
}
