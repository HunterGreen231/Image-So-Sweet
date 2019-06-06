import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import axios from "axios";

export default class FairySession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
      previousDimensions: 0,
      photoUrls: [],
      loaded: false
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.randomNum = this.randomNum.bind(this);

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
  }

  randomNum = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == this.state.previousDimensions) {
      this.randomNum();
    }
    this.setState({ previousDimensions: randomNumber });
    return randomNumber;
  };

  componentDidMount() {
    if (this.state.photoUrls.length == 0) {
      axios
        .get("https://image-so-sweet-api.herokuapp.com/images")
        .then(response => {
          this.setState({ photoUrls: response.data });
          console.log(this.state.photoUrls);
          this.setState({
            loaded: true
          });
          this.handleImageRender();
        })
        .catch(error => {
          console.log("Api error: ", error);
        });
    }
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

  handleImageRender = () => {
    for (let url of this.state.photoUrls) {
      let rn = this.randomNum();
      this.photoObject.push({
        src: url.image_url,
        className: "image",
        width: this.widthsHeights[rn].width,
        height: this.widthsHeights[rn].height
      });
    }
  };

  render() {
    window.onclick = event => {
      if (event.target.id == "lightboxBackdrop") {
        this.closeLightbox();
      }
    };
    return (
      <div className="page-content blog-container">
        <div className="session-title-blog-wrapper">
          <h1>The Harmon sisters fairy session</h1>
        </div>
        <div className="session-nav">
          <button>Session1</button>
          <button>Session2</button>
          <button>Session3</button>
        </div>
        {this.state.loaded && (
          <Gallery
            photos={this.photoObject}
            direction={"column"}
            onClick={this.openLightbox}
          />
        )}
        {this.state.loaded && (
          <Lightbox
            images={this.photoObject}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        )}
      </div>
    );
  }
}
