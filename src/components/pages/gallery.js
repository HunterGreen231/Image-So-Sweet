import React, { Component } from "react";
import Lightbox from "react-images";
import axios from "axios";

import Session from "../sessions/session";
import Contact from "../contact";

export default class GalleryPage extends Component {
  constructor() {
    super();

    this.state = {
      currentImage: 0,
      previousDimensions: 0,
      response: [],
      lightboxIsOpen: false,
      apiImageLength: 0
    };
    this.numberOfImages = [];
    this.sessionCurrent = 0;
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
    this.updateSessionCurrent = this.updateSessionCurrent.bind(this);
  }

  componentWillMount() {
    if (this.state.response.length == 0) {
      axios
        .get("https://image-so-sweet-api.herokuapp.com/low-res-images")
        .then(response => {
          this.setState({
            response: response.data,
            apiImageLength: response.data.length
          });
          this.handleImageRender();
        })
        .catch(error => {
          console.log("Api error: ", error);
        });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  updateNumberOfImages = (num, index) => {
    this.numberOfImages[index] = num;
  };

  updateSessionCurrent(second = false, third = false) {
    if (second) {
      this.sessionCurrent = this.numberOfImages[0];
    } else if (third) {
      this.sessionCurrent = this.numberOfImages[0] + this.numberOfImages[1];
    } else {
      this.sessionCurrent = 0;
    }
  }

  openLightbox = async (event, obj) => {
    await this.sleep(10);
    this.setState({
      currentImage: obj.index + this.sessionCurrent,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
    this.sessionCurrent = 0;
    this.props.setDeleteNav(true);
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
        src: url.image_url_low_res,
        session: url.session_low_res,
        className: "image",
        width: this.widthsHeights[rn].width,
        height: this.widthsHeights[rn].height
      });
    }
  };

  render() {
    return (
      <div>
        {this.photoObject.length + 1 >= this.state.apiImageLength ? (
          <div>
            <Lightbox
              images={this.photoObject}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
            <Session
              currentImage={this.state.currentImage}
              photoObject={this.photoObject}
              openLightbox={this.openLightbox}
              closeLightbox={this.closeLightbox}
              gotoPrevious={this.gotoPrevious}
              gotoNext={this.gotoNext}
              lightboxIsOpen={this.state.lightboxIsOpen}
              session={"The Harmon sisters Fairy Session"}
              sessionNumber={0}
              updateSessionCurrent={this.updateSessionCurrent}
              updateNumberOfImages={this.updateNumberOfImages}
              apiImageLength={this.state.apiImageLength}
            />
            <Session
              currentImage={this.state.currentImage}
              photoObject={this.photoObject}
              openLightbox={this.openLightbox}
              closeLightbox={this.closeLightbox}
              gotoPrevious={this.gotoPrevious}
              gotoNext={this.gotoNext}
              lightboxIsOpen={this.state.lightboxIsOpen}
              session={"Snow White"}
              sessionNumber={1}
              updateSessionCurrent={this.updateSessionCurrent}
              second={true}
              updateNumberOfImages={this.updateNumberOfImages}
              apiImageLength={this.state.apiImageLength}
            />
            <Session
              currentImage={this.state.currentImage}
              photoObject={this.photoObject}
              openLightbox={this.openLightbox}
              closeLightbox={this.closeLightbox}
              gotoPrevious={this.gotoPrevious}
              gotoNext={this.gotoNext}
              lightboxIsOpen={this.state.lightboxIsOpen}
              session={"All that Glitters"}
              sessionNumber={2}
              updateSessionCurrent={this.updateSessionCurrent}
              third={true}
              updateNumberOfImages={this.updateNumberOfImages}
              apiImageLength={this.state.apiImageLength}
            />
          </div>
        ) : null}
        <Contact />
      </div>
    );
  }
}
