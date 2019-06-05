import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavBarDropDown from "./nav-bar-dropdown";

const NavBar = props => {
  // componentDidMount() {
  //   if (this.$ref && location.href.includes("#my-ref")) {
  //     this.$ref.scrollIntoView({
  //       // optional params
  //       behaviour: "smooth",
  //       block: "start",
  //       inline: "center"
  //     });
  //   }
  // }

  // const handleHamBurgerClick = props.setDropDown(!props.dropDown)
  // getContactLink = () => {
  //   return `${window.location.pathname}/#bottom`;
  // };

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
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
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
