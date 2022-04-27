import React from "react";
import _ from "lodash";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./OurTeam.css";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    margin: theme.spacing(2),
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(2),
  },
}));

const OurTeam = ({ team }) => {
  const classes = useStyles();

  const renderTeam = () => {
    if (!_.isEmpty(team)) {
      const teamData = team.teamBrains;
      const _team = _.map(teamData, (team) => team);
      return (
        <Grid container>
          {_team.map((member, index) => {
            const getMember = () => {
              if (index === 0) {
                return (
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                    <div>
                      <Avatar
                        className={classes.small}
                        src={`${member.brainImage}`}
                      >
                        O
                      </Avatar>
                    </div>
                  </Grid>
                );
              } else if (index === 1) {
                return (
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                    <div>
                      <Avatar
                        className={classes.large}
                        src={`${member.brainImage}`}
                      >
                        O
                      </Avatar>
                    </div>
                  </Grid>
                );
              } else if (index === 2) {
                return (
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                    <div>
                      <Avatar
                        className={classes.large}
                        src={`${member.brainImage}`}
                      >
                        O
                      </Avatar>
                    </div>
                  </Grid>
                );
              } else if (index === 3) {
                return (
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                    <div>
                      <Avatar
                        className={classes.small}
                        src={`${member.brainImage}`}
                      >
                        O
                      </Avatar>
                    </div>
                  </Grid>
                );
              } else if (index === 4) {
                return (
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                    <div>
                      <Avatar
                        className={classes.small}
                        src={`${member.brainImage}`}
                      >
                        O
                      </Avatar>
                    </div>
                  </Grid>
                );
              } else {
                return (
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                    <div>
                      <Avatar
                        className={classes.small}
                        src={`${member.brainImage}`}
                      >
                        O
                      </Avatar>
                    </div>
                  </Grid>
                );
              }
            };
            return <>{getMember()}</>;
          })}
        </Grid>
      );
    }
  };

  return <div className={"our_team_container"}>{renderTeam()}</div>;
};

export default OurTeam;
