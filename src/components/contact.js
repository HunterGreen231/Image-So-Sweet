import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      fantasyTheme: "",
      location: "",
      childsName: "",
      referredBy: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildForm = this.buildForm.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        "https://image-so-sweet-api.herokuapp.com/email-form",
        this.buildForm()
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  buildForm(event) {
    let formData = new FormData();

    formData.append("firstName", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("childsName", this.state.childsName);
    formData.append("email", this.state.email);
    formData.append("fantasyTheme", this.state.fantasyTheme);
    formData.append("location", this.state.location);
    formData.append("phoneNumber", this.state.phoneNumber);
    formData.append("referredBy", this.state.referredBy);
    formData.append("message", this.state.message);

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  }

  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-background" />
        <div className="contact-content">
          <h1>Contact</h1>
          <form className="form-wrapper" onSubmit={this.handleSubmit}>
            <div className="three-column">
              <input
                name="firstName"
                placeholder="First Name"
                className="input-field"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="input-field"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                className="input-field"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                className="input-field"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
              <input
                name="fantasyTheme"
                placeholder="Fantasy Theme"
                className="input-field"
                value={this.state.fantasyTheme}
                onChange={this.handleChange}
              />
              <input
                name="location"
                placeholder="Location"
                className="input-field"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>
            <div className="two-column">
              <input
                name="childsName"
                placeholder="Child's Name"
                className="input-field"
                value={this.state.childsName}
                onChange={this.handleChange}
              />
              <input
                name="referredBy"
                placeholder="Referred By"
                className="input-field"
                value={this.state.referredBy}
                onChange={this.handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <button type="submit">Send Mail</button>
          </form>
        </div>
      </div>
    );
  }
}
