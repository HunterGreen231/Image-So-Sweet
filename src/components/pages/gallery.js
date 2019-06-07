import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import axios from "axios";

import Session from "../sessions/session";

export default class GalleryPage extends Component {
  constructor() {
    super();

    this.state = {
      currentImage: 0,
      previousDimensions: 0,
      response: [],
      loaded: false,
      lightboxIsOpen: false
    };

    this.photos = [];
    this.photoObject = [];
    this.widthsHeights = [
      {
        width: 4,
        height: 3
      },
      {
        width: 3,
        height: 4
      },
      {
        width: 1,
        height: 1
      }
    ];
    this.randomNum = this.randomNum.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentWillMount() {
    if (this.state.response.length == 0) {
      axios
        .get("https://image-so-sweet-api.herokuapp.com/images")
        .then(response => {
          this.setState({
            response: response.data
          });
          this.handleImageRender();
        })
        .catch(error => {
          console.log("Api error: ", error);
        });
    }
    console.log("LOADED: ", this.state.loaded);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  randomNum = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == this.props.previousDimensions) {
      this.randomNum();
    }
    this.setState({ previousDimensions: randomNumber });
    return randomNumber;
  };

  handleImageRender = () => {
    for (let url of this.state.response) {
      let rn = this.randomNum();
      this.photoObject.push({
        src: url.image_url,
        session: url.session,
        className: "image",
        width: this.widthsHeights[rn].width,
        height: this.widthsHeights[rn].height
      });
    }
  };

  render() {
    const thing = [
      this.photoObject[0],
      this.photoObject[1],
      this.photoObject[2],
      this.photoObject[3],
      this.photoObject[4],
      this.photoObject[5],
      this.photoObject[6]
    ];
    return (
      <div>
        {this.photoObject.length > 0 ? (
          <div>
            <Session
              currentImage={this.state.currentImage}
              loaded={this.state.loaded}
              photoObject={thing}
              openLightbox={this.openLightbox}
              closeLightbox={this.closeLightbox}
              gotoPrevious={this.gotoPrevious}
              gotoNext={this.gotoNext}
              lightboxIsOpen={this.state.lightboxIsOpen}
              session={"The Harmon sisters Fairy Session"}
            />
            <Session
              currentImage={this.state.currentImage}
              loaded={this.state.loaded}
              photoObject={thing}
              openLightbox={this.openLightbox}
              closeLightbox={this.closeLightbox}
              gotoPrevious={this.gotoPrevious}
              gotoNext={this.gotoNext}
              lightboxIsOpen={this.state.lightboxIsOpen}
              session={"The Harmon sisters Fairy Session"}
            />
            <Session
              currentImage={this.state.currentImage}
              loaded={this.state.loaded}
              photoObject={thing}
              openLightbox={this.openLightbox}
              closeLightbox={this.closeLightbox}
              gotoPrevious={this.gotoPrevious}
              gotoNext={this.gotoNext}
              lightboxIsOpen={this.state.lightboxIsOpen}
              session={"The Harmon sisters Fairy Session"}
            />
          </div>
        ) : (
          <div>
            <h1>loader</h1>
          </div>
        )}
      </div>
    );
  }
}
