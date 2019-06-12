import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarDropdown(props) {
  const handleToggle = async () => {
    props.setDropDown(!props.dropDown);
  };

  return (
    <div
      className="nav-bar-drop-down-wrapper"
      style={{
        display: props.dropDown ? "block" : "none"
      }}
    >
      <div className="bar">
        <NavLink
          exact
          to="/"
          className="nav-link-dropdown"
          onClick={() => handleToggle()}
          activeClassName="nav-link-active"
        >
          Home
        </NavLink>
      </div>
      <div className="bar">
        <NavLink
          to="/available-locations"
          className="nav-link-dropdown"
          onClick={() => handleToggle()}
          activeClassName="nav-link-active"
        >
          Available Locations
        </NavLink>
      </div>
      <div className="bar">
        <NavLink
          to="/gallery"
          className="nav-link-dropdown"
          onClick={() => handleToggle()}
          activeClassName="nav-link-active"
        >
          Gallery
        </NavLink>
      </div>
      <div className="bar bar-bottom">
        <NavLink
          to="/availability"
          className="nav-link-dropdown"
          onClick={() => handleToggle()}
          activeClassName="nav-link-active"
        >
          Availability
        </NavLink>
      </div>
    </div>
  );
}
