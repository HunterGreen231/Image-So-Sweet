import React, { Component } from "react";
import axios from "axios";

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

  render() {
    return (
      <div className="page-content">
        <div className="hero-background" />
        <div
          className="featured-session"
          style={{
            backgroundImage:
              this.state.featuredSession.length > 0 &&
              `url(${this.state.featuredSession[0].image_url})`
          }}
        >
          <h1 className="title">Featured Session</h1>
          <button>View</button>
        </div>
        <div style={{ backgroundColor: "black", height: "1000px" }} />
      </div>
    );
  }
}
