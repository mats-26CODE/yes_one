import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//-> component imports 🚀
import Home from "./home/Home";
import Development from "./development/Development";
import Design from "./design/Design";
import Team from "./team/Team";
import Careers from "./careers/Careers";
import NavBar from "./NavBar";
import Footer from "./usual/Footer";

const Main = () => {
  return (
    <Router>
      <div className={"app_navbar"}>
        <NavBar />
      </div>

      <div className={"app_body"}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/development">
            <Development />
          </Route>
          <Route exact path="/design">
            <Design />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/careers">
            <Careers />
          </Route>
        </Switch>
      </div>

      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
