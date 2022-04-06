import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./OurTeam.css";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: theme.spacing(2),
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(2),
  },
}));

const OurTeam = ({ memberOne, memberTwo, memberThree, memberFour }) => {
  const classes = useStyles();
  return (
    <div className={"our_team_container"}>
      <div>
        <Avatar className={classes.small} src={`${memberOne}`}>
          M
        </Avatar>
        <Avatar className={classes.large} src={`${memberTwo}`}>
          A
        </Avatar>
      </div>
      <div>
        <Avatar className={classes.large} src={`${memberThree}`}>
          T
        </Avatar>
        <Avatar className={classes.small} src={`${memberFour}`}>
          Y
        </Avatar>
      </div>
    </div>
  );
};

export default OurTeam;
