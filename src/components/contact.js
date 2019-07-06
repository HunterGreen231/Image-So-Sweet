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
      message: "",
      formMessageShow: false,
      formMessage: "* Please enter a valid phone number or email"
    };

    this.classNames = {
      show: "error-message-show",
      hide: "error-message-hidden"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildForm = this.buildForm.bind(this);
    this.handleSuccessMessage = this.handleSuccessMessage.bind(this);
  }

  checkIfPhoneNumber = () => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneRegex.test(this.state.phoneNumber)) {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.checkIfPhoneNumber()) {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        fantasyTheme: "",
        location: "",
        childsName: "",
        referredBy: "",
        message: ""
      });

      axios
        .post(
          "https://image-so-sweet-form-api.herokuapp.com/email-form",
          this.buildForm()
        )
        .then(function(response) {
          console.log("Email sent");
        })
        .catch(function(error) {
          console.log(error);
        });

      this.handleSuccessMessage();
    } else {
      this.setState({
        formMessageShow: true
      });
    }
  }

  handleSuccessMessage() {
    console.log("Hit");
    this.setState({
      formMessage: "Email sent",
      formMessageShow: true
    });
  }

  buildForm() {
    let formData = {
      childsName: this.state.childsName,
      email: this.state.email,
      fantasyTheme: this.state.fantasyTheme,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      location: this.state.location,
      message: this.state.message,
      phoneNumber: this.state.phoneNumber,
      referredBy: this.state.referredBy
    };

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
          <h1 className="contact-title">Contact</h1>
          <form className="form-wrapper" onSubmit={this.handleSubmit}>
            <div className="three-column">
              <input
                name="firstName"
                placeholder="First Name"
                className="input-field"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="input-field"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
              <input
                name="email"
                placeholder="Email"
                className="input-field"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                className="input-field"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                required
              />
              <input
                name="fantasyTheme"
                placeholder="Fantasy Theme"
                className="input-field"
                value={this.state.fantasyTheme}
                onChange={this.handleChange}
                required
              />
              <input
                name="location"
                placeholder="Location"
                className="input-field"
                value={this.state.location}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="two-column">
              <input
                name="childsName"
                placeholder="Child's Name"
                className="input-field"
                value={this.state.childsName}
                onChange={this.handleChange}
                required
              />
              <input
                name="referredBy"
                placeholder="Referred By"
                className="input-field"
                value={this.state.referredBy}
                onChange={this.handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
            <div className="submit-button-message-wrapper">
              <button type="submit">Send Mail</button>
              <p
                className={
                  this.state.formMessageShow
                    ? this.classNames.show
                    : this.classNames.hide
                }
              >
                {this.state.formMessage}
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
