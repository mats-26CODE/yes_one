import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./css/Team.css";

//-> react icons imports
import { RiAmazonFill, RiAppleFill, RiBehanceFill } from "react-icons/ri";

//-> component imports
import MemberSection from "./sections/MemberSection";
import ClientSection from "./sections/ClientSection";
import GetInTouch from "../usual/GetInTouch";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={"team_container"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={"team_header_box"}>
            <h4>
              Meet our team <span id={"slash"}>/</span>
            </h4>
          </div>

          <div className={"team_intro"}>
            <h5>
              Before you go down and check on the brains behind our company,
              know that there’s always
              <span id={"team_to_career_link"}>
                <Link to={"/careers"}> room</Link>
              </span>{" "}
              for more, the door’s open for those who are confident in their
              skills.
            </h5>
          </div>
        </Grid>
        s
      </Grid>

      <div className={"team_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <MemberSection
              brainImage={"dp goes here"}
              brainTitle={"The C.E.O"}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className={"team_traits_box"}>
              <div>
                <h4>Innovative,</h4>
                <h4>Hard Working,</h4>
                <h4>Motivated,</h4>
                <h4>Smiling,</h4>
                <h1>
                  <span role="img" aria-label="sunglasses emoji">
                    🤪
                  </span>
                </h1>
                <p>faces</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <MemberSection
              brainImage={"dp goes here"}
              brainTitle={"Developer"}
            />
          </Grid>
        </Grid>
      </div>

      <div className={"team_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <MemberSection
              brainImage={"dp goes here"}
              brainTitle={"Developer"}
            />
          </Grid>
        </Grid>
      </div>

      <div className={"team_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <MemberSection
              brainImage={"dp goes here"}
              brainTitle={"Creative Designer"}
            />
          </Grid>
        </Grid>
      </div>

      <div className={"client_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"clients_header_box"}>
              <h4>
                Our Clients <span id={"slash"}>/</span>
              </h4>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <ClientSection
              icon={<RiAmazonFill size={"6.5em"} color={"#ffffff"} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <ClientSection
              icon={<RiBehanceFill size={"6.5em"} color={"#ffffff"} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <ClientSection
              icon={<RiAppleFill size={"6.5em"} color={"#ffffff"} />}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"client_care_box"}>
              <p>
                We care about our work, our clients and our people. We treat
                everyone with honesty and respect and expect to be treated in
                the same way.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>

      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Team;
