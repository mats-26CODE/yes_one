import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

//-> component imports 🚀
import Home from "./home/Home";
import Development from "./development/Development";
import Design from "./design/Design";
import Team from "./team/Team";
import Careers from "./careers/Careers";
import NavBar from "./NavBar";
import Footer from "./usual/Footer";
import MobileNav from "./usual/MobileNav";

//-> react icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navToggled: false,
    };
  }

  handleNavToggled() {
    this.setState({
      navToggled: true,
    });
  }

  handleNavClosed() {
    this.setState({
      navToggled: false,
    });
  }

  render() {
    return (
      <Router>
        <div className="app__navbar">
          <BrowserView>
            <NavBar />
          </BrowserView>

          <MobileView>
            {/* <div className={"nav__logo_mobile"}>
              <h4>Ostri</h4>
            </div> */}

            <HiOutlineMenuAlt3
              className={"humburger__menu"}
              onClick={() => this.handleNavToggled()}
            />

            {this.state.navToggled ? (
              <MobileNav handleNavToggled={() => this.handleNavClosed()} />
            ) : null}
          </MobileView>
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
  }
}

export default Main;
