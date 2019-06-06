import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavBarDropDown from "./nav-bar-dropdown";

const NavBar = props => {
  const handleHamBurgerClick = () => {
    props.handleIsOpen(!props.isOpen);
    props.setDropDown(!props.dropDown);
  };

  const handleMouseLeave = () => {
    if (!props.isOpen) {
      props.setDeleteNav(false);
    }
  };

  return (
    // Home, Blog, Contact, Availability, Available Locations, About
    <div
      className="nav-wrapper"
      onMouseEnter={() => props.setDeleteNav(true)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className="nav-link-wrapper">
        <div className="nav-link">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>
        <h1 className="divider">/</h1>
        <div className="nav-link">
          <NavLink to="/gallery" activeClassName="nav-link-active">
            Gallery
          </NavLink>
        </div>
        <h1 className="divider">/</h1>
        <div className="nav-link">
          <NavLink to="/availability" activeClassName="nav-link-active">
            Availability
          </NavLink>
        </div>
        <h1 className="divider">/</h1>
        <div className="nav-link">
          <NavLink to="/available-locations" activeClassName="nav-link-active">
            Available Locations
          </NavLink>
        </div>
        {/* <NavLink to={}>Contact</NavLink> */}
        <div className="hamburger-wrapper">
          <button onClick={() => handleHamBurgerClick()}>
            <FontAwesomeIcon icon={faBars} className="hamburger" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
