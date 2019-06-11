import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Logo from "../../../static/images/ImageSoSweet Watermark2 WHITE copy.png";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredSession: []
    };
  }

  componentWillMount() {
    axios
      .get("https://image-so-sweet-api.herokuapp.com/images")
      .then(response => {
        this.setState({
          featuredSession: response.data.filter(function(value) {
            return value.session == "Highlighted Session";
          })
        });
      })
      .catch(error => {
        console.log("Error retrieving API data: ", error);
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page-content">
        <div className="hero-background">
          <img src={Logo} />
        </div>
        <div
          className="featured-session"
          style={{
            backgroundImage:
              this.state.featuredSession.length > 0 &&
              `url(${this.state.featuredSession[0].image_url})`
          }}
        >
          <h1 className="title">Featured Session</h1>
          <button>
            <NavLink to="/gallery" className="session-link">
              View
            </NavLink>
          </button>
        </div>
        <div style={{ backgroundColor: "black", height: "1000px" }} />
      </div>
    );
  }
}
