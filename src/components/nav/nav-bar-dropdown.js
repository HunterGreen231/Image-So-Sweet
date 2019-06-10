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
        <button className="dropdown-button" onClick={() => handleToggle()}>
          <NavLink
            exact
            to="/"
            className="nav-link-dropdown"
            activeClassName="nav-link-active"
          >
            Home
          </NavLink>
        </button>
      </div>
      <div className="bar">
        <button className="dropdown-button" onClick={() => handleToggle()}>
          <NavLink
            to="/available-locations"
            className="nav-link-dropdown"
            activeClassName="nav-link-active"
          >
            Available Locations
          </NavLink>
        </button>
      </div>
      <div className="bar">
        <button className="dropdown-button" onClick={() => handleToggle()}>
          <NavLink
            to="/gallery"
            className="nav-link-dropdown"
            activeClassName="nav-link-active"
          >
            Gallery
          </NavLink>
        </button>
      </div>
      <div className="bar bar-bottom">
        <button className="dropdown-button" onClick={() => handleToggle()}>
          <NavLink
            to="/availability"
            className="nav-link-dropdown"
            activeClassName="nav-link-active"
          >
            Availability
          </NavLink>
        </button>
      </div>
    </div>
  );
}
