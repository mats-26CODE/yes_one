import React from "react";
import { Grid } from "@material-ui/core";
import { isMobile } from "react-device-detect";

const SectionOne = ({
  noteCallout,
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
    <div className={"section_box"}>
      {!isMobile ? (
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={artClassName}>
              {noteCallout ? (
                <div className={"note_right"}>{noteCallout}</div>
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
      ) : (
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={"section_intro_box"}>
              <div>
                <h4>{heading}</h4>
                <p>{intro}</p>
                {button}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={artClassName}>
              {noteCallout ? (
                <div className={"note_right"}>{noteCallout}</div>
              ) : null}
              {artworkImage ? (
                <div>
                  <img src={artworkImage} alt={`${heading} artwork`} />
                </div>
              ) : null}
              {team ? <div className={"section_team_box"}>{team}</div> : null}
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default SectionOne;
