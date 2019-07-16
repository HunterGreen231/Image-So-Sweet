import React, { Component } from "react";
import axios from "axios";
try {
  import { Keys } from "../../secrets";
} catch (e) {
  throw e;
}

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
      formMessage: "Email sent",
      emailHighlight: false,
      phoneHighlight: false
    };

    this.classNames = {
      show: "contact-message-show",
      hide: "contact-message-hidden",
      highlight: "warning"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildForm = this.buildForm.bind(this);
    this.handleSuccessMessage = this.handleSuccessMessage.bind(this);
  }

  checkIfPhoneNumber = () => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneRegex.test(this.state.phoneNumber)) {
      this.setState({
        phoneHighlight: false
      });
      return true;
    } else {
      this.setState({
        phoneHighlight: true
      });
      return false;
    }
  };

  checkIfEmail = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(this.state.email)) {
      this.setState({
        emailHighlight: false
      });
      return true;
    } else {
      this.setState({
        emailHighlight: true
      });
      return false;
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.checkIfPhoneNumber() && this.checkIfEmail()) {
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
          process.env.EMAIL_FORM_API_URL
            ? process.env.EMAIL_FORM_API_URL
            : Keys.EMAIL_FORM_API_URL,
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
        formMessage: "* Please enter a valid phone number or email",
        formMessageShow: true
      });
    }
  }

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  handleSuccessMessage() {
    this.setState({
      formMessage: "Email sent",
      formMessageShow: true
    });

    this.sleep(3000).then(() => {
      this.setState({
        formMessageShow: false
      });
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
                className={`input-field ${this.state.emailHighlight &&
                  this.classNames.highlight}`}
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                className={`input-field ${this.state.phoneHighlight &&
                  this.classNames.highlight}`}
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
