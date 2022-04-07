import React from "react";
import { Grid } from "@material-ui/core";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const Section = ({
  introLeft,
  noteCalloutLeftOne,
  noteCalloutLeftTwo,
  noteCalloutRightOne,
  noteCalloutRightTwo,
  heading,
  headingPresent,
  intro,
  artwork,
  artworkImage,
  artworkSize,
  artworkRepeat,
  artworkPosition,
  circleArtwork,
  circleArtworkTwo,
  principleOne,
  principleTwo,
  principleThree,
  principleFour,
  principleFive,
  traits,
}) => {
  return (
    <div className={"dev_section_box"}>
      {
        //-> if intro stays at left side, then render the following
        introLeft ? (
          <Grid container>
            {/* if heading is present , then render heading here, else render artwork */}
            {headingPresent ? (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={"dev_section_intro"}>
                  <div>
                    <div>
                      <h4>{heading}</h4>
                      <p>{intro}</p>
                    </div>

                    <div>
                      <h5>Our work's traits</h5>

                      <div className="dev_trait_box">
                        <IoChevronForwardCircleOutline
                          size={"1em"}
                          color={"#ffffff"}
                        />
                        <h6>Planning & Analysis</h6>
                      </div>
                      <div className="dev_trait_box">
                        <IoChevronForwardCircleOutline
                          size={"1em"}
                          color={"#ffffff"}
                        />
                        <h6>Planning & Analysis</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            ) : (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                {principleOne}
                {principleTwo}
                {principleThree}
                {principleFour}
                {principleFive}
              </Grid>
            )}

            {artwork ? (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div
                  className={"dev_section_art"}
                  style={{
                    backgroundImage: `url(${artworkImage})`,
                    backgroundSize: `${artworkSize}`,
                    backgroundRepeat: `${artworkRepeat}`,
                    backgroundPosition: `${artworkPosition}`,
                  }}
                >
                  <div className={"note_top_left"}>{noteCalloutLeftOne}</div>
                  <div className={"note_bottom_left"}>{noteCalloutLeftTwo}</div>
                </div>
              </Grid>
            ) : (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <div>{circleArtwork}</div>
                  <div>{circleArtworkTwo}</div>
                </div>
              </Grid>
            )}
          </Grid>
        ) : (
          // else if Intro stays at right side, then render the following
          <Grid container>
            {artwork ? (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div
                  className={"dev_section_two_art"}
                  style={{
                    backgroundImage: `url(${artworkImage})`,
                    backgroundSize: `${artworkSize}`,
                    backgroundRepeat: `${artworkRepeat}`,
                    backgroundPosition: `${artworkPosition}`,
                  }}
                >
                  <div className={"note_top_right"}>{noteCalloutRightOne}</div>
                  <div className={"note_bottom_right"}>
                    {noteCalloutRightTwo}
                  </div>
                </div>
              </Grid>
            ) : (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <div>{circleArtwork}</div>
                  <div>{circleArtworkTwo}</div>
                </div>
              </Grid>
            )}

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className={"dev_section_intro_right"}>
                <div>
                  <h4>{heading}</h4>
                  <p>{intro}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        )
      }
    </div>
  );
};

export default Section;
