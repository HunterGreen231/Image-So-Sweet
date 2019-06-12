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
        <div className="hero-gradient-wrapper">
          <div className="hero-background">
            <img src={Logo} />
          </div>
          <div className="gradient-overlay" />
        </div>
        <div className="about-wrapper">
          <h1>Moms filler content goes here</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus cum error voluptates atque doloribus et voluptatum? Ut
            nesciunt impedit velit tempore consequuntur, placeat quidem delectus
            recusandae quibusdam, repudiandae veritatis autem. Rem possimus odit
            tenetur eum nihil obcaecati reiciendis voluptatum dolorem recusandae
            maxime facilis deserunt placeat adipisci nostrum quia cupiditate,
            nam architecto! Unde iusto amet atque qui. Ad dolorum temporibus
            mollitia. Quod fuga dolores, inventore optio eos iste consequatur.
            Eaque alias voluptate assumenda numquam, repellendus, ex aliquid
            soluta quo molestiae perferendis accusantium commodi tempore, ipsum
            ipsa reprehenderit ratione hic. Ducimus, facere! Odio excepturi
            dolorum ea sint magni debitis quo, alias dignissimos laboriosam
            dolores velit voluptatem quaerat iste facilis, quae, ipsum
            accusantium eligendi iure odit? Eveniet deleniti corrupti eligendi
            nihil iure consequatur. Commodi harum quae a libero explicabo sint
            odit fugit facere deserunt consectetur, distinctio, magni possimus,
            veniam voluptatem unde animi minus itaque culpa eligendi laudantium
            et! Doloribus temporibus consectetur minus a!
          </p>
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
          <NavLink to="/gallery" className="session-link">
            View
          </NavLink>
        </div>
        <div style={{ backgroundColor: "black", height: "1000px" }} />
      </div>
    );
  }
}
