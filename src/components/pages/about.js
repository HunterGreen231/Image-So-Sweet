import React, { useEffect } from "react";
import ProfilePicture from "../../../static/images/about-photo.jpg";
import Contact from "../contact";

export default function() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="page-content">
      <div className="about-page-wrapper">
        <div className="image-wrapper">
          <img src={ProfilePicture} />
        </div>
        <div className="text-wrapper">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            delectus odio eum! Beatae nam, fugit sapiente totam, reprehenderit a
            optio, aliquam ipsum labore dolore alias expedita ratione. Magni,
            quis quam! Velit fugit, impedit ex error labore suscipit aspernatur
            officia, reiciendis et aliquid voluptatum ad obcaecati, rem harum
            magni. Doloribus reiciendis repellat ex, eaque voluptatum dicta
            voluptate qui harum labore tempora. Quidem est tenetur enim deleniti
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
