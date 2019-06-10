import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class Session extends Component {
  constructor(props) {
    super(props);

    this.breaker = false;
    this.result = [];
    this.checkImages = this.checkImages.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  checkImages = () => {
    if (!this.breaker) {
      const session = this.props.session;

      this.result = this.props.photoObject.filter(function(value) {
        return value.session == session;
      });
      this.props.updateNumberOfImages(
        this.result.length,
        this.props.sessionNumber
      );
      if (this.props.photoObject.length + 1 == this.props.apiImageLength) {
        this.breaker = true;
      }
    }
  };

  handleWindowClick = () => {
    window.onclick = event => {
      if (event.target.id == "lightboxBackdrop") {
        this.props.closeLightbox();
      }
    };
  };

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  render() {
    this.handleWindowClick();
    return (
      <div
        className="page-content blog-container"
        onClick={() =>
          this.props.updateSessionCurrent(this.props.second, this.props.third)
        }
      >
        {this.props.photoObject.length + 1 == this.props.apiImageLength ||
        (this.props.photoObject.length == this.props.apiImageLength &&
          this.props.photoObject.length != 0) ? (
          <div>
            {this.checkImages()}
            <div className="session-title-blog-wrapper">
              <h1>{this.props.session}</h1>
            </div>
            <Gallery
              photos={this.result}
              direction={"column"}
              onClick={this.props.openLightbox}
            />
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
