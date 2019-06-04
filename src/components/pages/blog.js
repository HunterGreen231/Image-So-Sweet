import React, { Component } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Image from "../../../static/images/IMG_8111-Edit.jpg";
import Image2 from "../../../static/images/D44A7172-2.jpg";

export default class Blog extends Component {
  constructor() {
    super();
  }

  photos = [
    {
      className: "image",
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: Image,
      width: 1,
      height: 1
    },
    {
      className: "image",
      src: Image2,
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4
    },
    {
      className: "image",
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      className: "image",
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];

  render() {
    return (
      <div className="page-content blog-container">
        <button onClick={console.log("hit")}>Click me</button>
        <Gallery photos={this.photos} direction={"column"} />
      </div>
    );
  }
}
