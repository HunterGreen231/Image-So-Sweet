import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
try {
  import { Keys } from "../../../secrets";
} catch (e) {
  throw e;
}

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
      .get(
        process.env.IMAGES_API_URL
          ? process.env.IMAGES_API_URL
          : Keys.IMAGES_API_URL
      )
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
        {this.state.featuredSession.length > 0 ? (
          <div>
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
                  <li>
                    <span>Mermaids</span>
                  </li>
                  <li>
                    <span>Pirates</span>
                  </li>
                  <li>
                    <span>Fairies</span>
                  </li>
                  <li>
                    <span>Pixies</span>
                  </li>
                  <li>
                    <span>Princess</span>
                  </li>
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
              <div className="investment-background">
                <div className="investment-overlay" />
                <div className="investment-content">
                  <h1 className="investment-title">Investment</h1>
                  <h1 className="fee-left">SESSION RETAINER FEE / $100-$350</h1>
                  <h1 className="fee-right">DIGITALS BEGIN AT \ $250</h1>
                  <h1 className="fee-left">PRODUCT BEGINS AT \ $400</h1>
                  <p>
                    We provide a complete stylized session that is unique to
                    every client. From starting concept to finishing touches my
                    team of artists and I create your look you've been dreaming
                    about for years. Tell us your ideas for the session and we
                    will bring them to life! Contact for more information.
                  </p>
                </div>
              </div>
            </div>
            <Parralax
              backgroundObject={[]}
              backgroundImage={LocationsBackgroundImage}
              title="Locations"
              route={"/locations"}
              right={true}
            />
            <Contact />
          </div>
        ) : (
          <div className="loader">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        )}
      </div>
    );
  }
}
