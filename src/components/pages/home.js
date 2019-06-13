import React, { Component } from "react";
import axios from "axios";

import Contact from "../contact";
import Parralax from "../parralax-background";
import Logo from "../../../static/images/ImageSoSweet Watermark2 WHITE copy.png";
import LocationsBackgroundImage from "../../../static/images/Locations-Background.jpg";

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
        <div className="hero-gradient-wrapper">
          <div className="hero-background">
            <img src={Logo} />
          </div>
          <div className="gradient-overlay" />
        </div>
        <div className="about-wrapper">
          <h1>Utah's Fantasy Photographer</h1>
          <div className="about-content-wrapper">
            <p className="sub-heading">
              We specialize in bringing your dreams to life!
            </p>
            <p>
              Child and Adult sessions are available, We create your entire
              look!
            </p>
            <ul>
              <li>Mermaids</li>
              <li>Pirates</li>
              <li>Fairies</li>
              <li>Pixies</li>
              <li>Princess</li>
              {/* <li>Your favorite Prince and Princess</li> */}
            </ul>
            {/* <h1>
              Mermaids Pirates Fairies Pixies Trolls Your favorite Prince and
              Princess
            </h1> */}
          </div>
        </div>
        <Parralax
          backgroundObject={this.state.featuredSession}
          title="Featured Session"
          route={"/gallery"}
        />
        <div className="investment-overlay-wrapper">
          <div className="investment-background" />
          <div className="investment-content">
            <h1>Investment</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus cum error voluptates atque doloribus et voluptatum?
              Ut nesciunt impedit velit tempore consequuntur, placeat quidem
              delectus recusandae quibusdam, repudiandae veritatis autem. Rem
            </p>
          </div>
        </div>
        <Parralax
          backgroundObject={[]}
          backgroundImage={LocationsBackgroundImage}
          title="Locations"
          route={"/locations"}
        />
        <Contact />
      </div>
    );
  }
}
