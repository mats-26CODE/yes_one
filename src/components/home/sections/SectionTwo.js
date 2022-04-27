import React from "react";
import { Grid } from "@material-ui/core";
import { isMobile } from "react-device-detect";

//-> component imports

const SectionTwo = ({
  noteCallout,
  heading,
  intro,
  button,
  bgImage,
  bgSize,
  bgRepeat,
  artworkImage,
}) => {
  return (
    <div className={"section_two_box"}>
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
          <div className={"section_two_art_box"}>
            {isMobile ? (
              <div className={"note_right"}>{noteCallout}</div>
            ) : (
              <div className={"note_left"}>{noteCallout}</div>
            )}

            {artworkImage ? (
              <div>
                <img src={artworkImage} alt={`${heading} artwork`} />
              </div>
            ) : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SectionTwo;
