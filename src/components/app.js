import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Transition } from "react-transition-group";

import NavBar from "./nav/nav-bar";
import NavBarDropDown from "./nav/nav-bar-dropdown";
import Home from "./pages/home";
import Blog from "./pages/blog";
import NoMatch from "./pages/no-match";

export default function App() {
  const [dropDown, setDropDown] = useState(false);

  const handleToggle = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="container">
      <Router>
        <div className="app-wrapper">
          <div className="fixed-nav-bar">
            <NavBar handleToggle={handleToggle} />
            {dropDown && <NavBarDropDown handleToggle={handleToggle} />}
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
