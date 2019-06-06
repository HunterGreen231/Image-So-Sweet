import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import axios from "axios";

import FairySession from "../sessions/fairy-session";

export default class GalleryPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <FairySession />
      </div>
    );
  }
}
