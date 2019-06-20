import React from "react";
import { NavLink } from "react-router-dom";

export default function Parralax(props) {
  return (
    <div
      className="featured-session"
      style={{
        backgroundImage:
          props.backgroundObject.length > 0
            ? `url(${props.backgroundObject[0].image_url})`
            : `url(${props.backgroundImage})`
      }}
    >
      <h1 className="title">{props.title}</h1>
      <NavLink to={props.route} className="session-link">
        View
      </NavLink>
      <div className="text-background" />
    </div>
  );
}
