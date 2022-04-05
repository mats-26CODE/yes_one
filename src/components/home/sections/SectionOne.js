import React from "react";
import { Grid } from "@material-ui/core";

//-> file imports
import bgOne from "../../../assets/backgrounds/bgOne.svg";

const SectionOne = ({
  noteCalloutRight,
  team,
  heading,
  intro,
  button,
  artClassName,
  artworkImage,
  bgImage,
  bgSize,
  bgRepeat,
  bgPosition,
}) => {
  return (
    <div
      className={"section_box"}
      style={{
        backgroundImage: `url(${bgOne})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div
            className={artClassName}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: `${bgSize}`,
              backgroundRepeat: `${bgRepeat}`,
              backgroundPosition: `${bgPosition}`,
            }}
          >
            {noteCalloutRight ? (
              <div className={"note_right"}>{noteCalloutRight}</div>
            ) : null}
            {artworkImage ? (
              <div>
                <img src={artworkImage} alt={`${heading} artwork`} />
              </div>
            ) : null}
            {team ? <div className={"section_team_box"}>{team}</div> : null}
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={"section_intro_box"}>
            <div>
              <h4>{heading}</h4>
              <p>{intro}</p>
              {button}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SectionOne;
