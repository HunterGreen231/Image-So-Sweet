import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import axios from "axios";

export default class Session extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: []
    };
    this.checkImages = this.checkImages.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  componentDidMount = () => {
    if (this.state.result.length == 0) {
      this.checkImages();
    }
  };

  checkImages = () => {
    console.log(this.props.photoObject);
  };

  handleWindowClick = () => {
    window.onclick = event => {
      if (event.target.id == "lightboxBackdrop") {
        this.props.closeLightbox();
      }
    };
  };

  render() {
    this.handleWindowClick();
    return (
      <div className="page-content blog-container">
        {this.props.photoObject.length > 0 ? (
          <div>
            <div className="session-title-blog-wrapper">
              <h1>The Harmon sisters fairy session</h1>
            </div>
            <Gallery
              photos={this.props.photoObject}
              direction={"column"}
              onClick={this.props.openLightbox}
            />
            <Lightbox
              images={this.props.photoObject}
              onClose={this.props.closeLightbox}
              onClickPrev={this.props.gotoPrevious}
              onClickNext={this.props.gotoNext}
              currentImage={this.props.currentImage}
              isOpen={this.props.lightboxIsOpen}
            />
          </div>
        ) : (
          <div>
            <h1>hunter put ze loader here</h1>
          </div>
        )}
      </div>
    );
  }
}
