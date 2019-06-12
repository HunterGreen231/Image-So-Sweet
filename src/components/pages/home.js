import React, { Component } from "react";
import axios from "axios";
import Parralax from "../parralax-background";

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
          <h1>Utah's Fantasy Photographer</h1>
          <div className="about-content-wrapper">
            <p>We specialize in bringing your dreams to life!</p>
            <p>
              Child and Adult sessions are available, We create your entire
              look!
            </p>
            {/* <p>
              ----- your favorite Prince or
              Princess
            </p> */}
            <ul>
              <li>Mermaids</li>
              <li>Pirates</li>
              <li>Fairies</li>
              <li>Pixies</li>
              <li>Trolls</li>
              <li>Trolls</li>
              <li>Your favorite Prince or Princess</li>
            </ul>
          </div>
        </div>
        <Parralax
          backgroundObject={this.state.featuredSession}
          title="Featured Session"
          route={"/gallery"}
        />
        <div className="investment-wrapper">
          <h1>Investment</h1>
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
      </div>
    );
  }
}
