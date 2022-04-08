import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./Footer.css";

//-> icon imports
import { IoLocationOutline, IoLogoInstagram } from "react-icons/io5";
import { RiTwitterLine, RiLinkedinFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={"footer__box"}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <div className={"footer__nav_links"}>
                <div>
                  <p>
                    <Link to={"/"}>home</Link>
                  </p>
                  <p>
                    <Link to={"/development"}>development</Link>
                  </p>
                  <p>
                    <Link to={"/design"}>design</Link>
                  </p>
                  <p>
                    <Link to={"/team"}>team</Link>
                  </p>
                  <p>
                    <Link to={"/careers"}>careers</Link>
                  </p>
                  <p>
                    <Link to={"/contact"}>contact</Link>
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <div className={"footer__expertise_box"}>
                <div>
                  <h4>expertise in</h4>
                </div>

                <div>
                  <p>iOS & Android Apps</p>
                  <p>Web Apps</p>
                  <p>AI Solutions</p>
                  <p>Hardware Solutions</p>
                  <p>Machine Learning</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className={"footer__offices_box"}>
                <div>
                  <h4>office</h4>
                </div>
                <div>
                  <div>
                    <p>
                      <IoLocationOutline className={"locationIcon"} />
                    </p>
                    <h4>main office</h4>
                  </div>
                  <div>
                    <p>Dar es Salaam</p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div className={"footer__social"}>
                <div>
                  <h4>follow</h4>
                </div>

                <div>
                  <div>
                    <IoLogoInstagram className={"socialIcon"} />
                  </div>
                  <div>
                    <RiTwitterLine className={"socialIcon"} />
                  </div>
                  <div>
                    <TiSocialFacebook className={"socialIcon"} />
                  </div>
                  <div>
                    <RiLinkedinFill className={"socialIcon"} />
                  </div>
                </div>

                <div>
                  <div>
                    <p>hello@ostri.co.tz</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div className={"footer__registration_box"}>
                <div>
                  <p>
                    We are registered by Lorem ipsum Act No A(2) of 2000, Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div className={"footer__copyright"}>
                <div>
                  <p>© Copyright 2022</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div className={"footer__logo"}>
                <h3>Logo</h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </footer>
    );
  }
}

export default Footer;
