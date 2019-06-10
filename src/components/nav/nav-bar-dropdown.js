import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarDropdown(props) {
  const handleToggle = async () => {
    props.handleIsOpen(!props.isOpen);
    props.setDropDown(!props.dropDown);
    await sleep(400);
    props.setDeleteNav(true);
  };

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const classNames = {
    show: "nav-bar-drop-down-wrapper-show",
    hide: "nav-bar-drop-down-wrapper-hide"
  };

  return (
    <div
      className={props.dropDown ? classNames.show : classNames.hide}
      style={{
        display: props.deleteNav ? "none" : "block"
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
