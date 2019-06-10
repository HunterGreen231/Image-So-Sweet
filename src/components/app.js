import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./nav/nav-bar";
import NavBarDropDown from "./nav/nav-bar-dropdown";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import NoMatch from "./pages/no-match";

export default function App() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="container">
      <Router>
        <div className="app-wrapper">
          <div className="fixed-nav-bar">
            <NavBar setDropDown={setDropDown} dropDown={dropDown} />
            <NavBarDropDown dropDown={dropDown} setDropDown={setDropDown} />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
