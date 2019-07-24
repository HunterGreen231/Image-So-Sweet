import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class Session extends Component {
  constructor(props) {
    super(props);

    this.breaker = false;
    this.result1 = [];
    this.result2 = [];
    this.checkImages = this.checkImages.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  checkImages = () => {
    if (!this.breaker) {
      const session1 = this.props.session1;
      const session2 = this.props.session2;

      this.result1 = this.props.photoObject.filter(function(value) {
        return value.session == session1;
      });
      this.result2 = this.props.photoObject.filter(function(value) {
        return value.session == session2;
      });
      this.result2.forEach(image => {
        this.result1.push(image);
      });
      this.props.updateNumberOfImages(
        this.result1.length,
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
        className="blog-container"
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
              {this.props.featuredSessionTitle && (
                <h1 style={{ marginTop: "40px" }}>Featured Session</h1>
              )}
              <h1>{this.props.Title}</h1>
            </div>

            <Gallery
              photos={this.result1}
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
