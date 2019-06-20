import React from "react";
import { NavLink } from "react-router-dom";

export default function Parralax(props) {
  return (
    <div
      className="featured-session"
      style={{
        backgroundImage: `url(${props.backgroundImage})`
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
