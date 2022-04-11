import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./css/Team.css";
import { useSelector } from "react-redux";

//-> component imports
import MemberSection from "./sections/MemberSection";
import ClientSection from "./sections/ClientSection";
import GetInTouch from "../usual/GetInTouch";
import {
  selectClients,
  selectClientTreat,
  selectTeamHeader,
  selectTeamBrains,
  selectTeamIntro,
  selectTeamTraits,
} from "../../features/teamSlice";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //-> team page details / data from redux
  const teamHeader = useSelector(selectTeamHeader);
  const teamIntro = useSelector(selectTeamIntro);
  const teamBrains = useSelector(selectTeamBrains);
  const teamTraits = useSelector(selectTeamTraits);
  const clients = useSelector(selectClients);
  const clientTreat = useSelector(selectClientTreat);

  return (
    <div className={"team_container"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={"team_header_box"}>
            {teamHeader ? (
              <h4>
                {teamHeader.teamHeader} <span id={"slash"}>/</span>
              </h4>
            ) : (
              <h4>
                Meet our team <span id={"slash"}>/</span>
              </h4>
            )}
          </div>

          <div className={"team_intro"}>
            {teamIntro ? (
              <h5>
                {teamIntro.teamIntro}{" "}
                <span id={"team_to_career_link"}>
                  <Link to={"/careers"}>room</Link>
                </span>{" "}
                for you
              </h5>
            ) : (
              <h5>
                Before you go down and check on the brains behind our company,
                know that there’s always
                <span id={"team_to_career_link"}>
                  <Link to={"/careers"}> room</Link>
                </span>{" "}
                for more, the door’s open for those who are confident in their
                skills.
              </h5>
            )}
          </div>
        </Grid>
      </Grid>

      <div className={"team_section"}>
        <MemberSection brains={teamBrains} traits={teamTraits} />
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

        <div>
          <ClientSection clientData={clients} />
        </div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"client_care_box"}>
              {clientTreat ? (
                <p>{clientTreat.clientTreat}</p>
              ) : (
                <p>
                  We care about our work, our clients and our people. We treat
                  everyone with honesty and respect and expect to be treated in
                  the same way.
                </p>
              )}
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
