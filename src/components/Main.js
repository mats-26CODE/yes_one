import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//-> component imports 🚀
import Home from "./home/Home";
import Development from "./development/Development";
import Design from "./design/Design";
import Team from "./team/Team";
import Careers from "./careers/Careers";
import NavBar from "./NavBar";
import Footer from "./usual/Footer";
import HomeActions from "../actions/HomeActions";

const Main = () => {
  return (
    <div>
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

        {/* Mount the action component, not ideal / i dont know why it works this way with redux */}
        <HomeActions />
      </div>

      <div className={"app_footer"}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
