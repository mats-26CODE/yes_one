import React from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";

const MemberSection = ({ brains, traits }) => {
  const renderTeamTraits = () => {
    if (!_.isEmpty(traits)) {
      const traitsData = traits.teamTraits;
      const _traits = _.map(traitsData, (trait) => trait);
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"team_traits_box"}>
              {_traits.map((trait, index) => {
                return (
                  <div key={index}>
                    <h4>{trait.teamTrait},</h4>
                  </div>
                );
              })}

              <h1>
                <span role="img" aria-label="sunglasses emoji">
                  🤪
                </span>
              </h1>
              <p>faces</p>
            </div>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
        </Grid>
      );
    }
  };

  const renderTeamBrains = () => {
    if (!_.isEmpty(brains)) {
      const brainsData = brains.teamBrains;
      const _brains = _.map(brainsData, (brain) => brain);
      return (
        <Grid container>
          {_brains.map((brain, index) => {
            const getGridItem = () => {
              if (index === 0) {
                return (
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
                    <div className="team_brain_box">
                      <div
                        className={"team_brain"}
                        style={{
                          backgroundImage: `url(${brain.brainImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <svg viewBox="0 0 500 500">
                          <path
                            id="curve"
                            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                          />
                          <text className="textpath">
                            <textPath xlinkHref="#curve">
                              {brain.brainName}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className={"team_title"}>
                        <h4>{brain.brainTitle}</h4>
                      </div>
                    </div>
                  </Grid>
                );
              } else if (index === 1) {
                return (
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
                    <div className="team_brain_box">
                      <div
                        className={"team_brain"}
                        style={{
                          backgroundImage: `url(${brain.brainImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <svg viewBox="0 0 500 500">
                          <path
                            id="curve"
                            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                          />
                          <text className="textpath">
                            <textPath xlinkHref="#curve">
                              {brain.brainName}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className={"team_title"}>
                        <h4>{brain.brainTitle}</h4>
                      </div>
                    </div>
                  </Grid>
                );
              } else if (index === 2) {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    key={index}
                  >
                    <div className="team_brain_box">
                      <div
                        className={"team_brain"}
                        style={{
                          backgroundImage: `url(${brain.brainImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <svg viewBox="0 0 500 500">
                          <path
                            id="curve"
                            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                          />
                          <text className="textpath">
                            <textPath xlinkHref="#curve">
                              {brain.brainName}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className={"team_title"}>
                        <h4>{brain.brainTitle}</h4>
                      </div>
                    </div>
                  </Grid>
                );
              } else if (index === 3) {
                return (
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
                    <div className="team_brain_box">
                      <div
                        className={"team_brain"}
                        style={{
                          backgroundImage: `url(${brain.brainImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <svg viewBox="0 0 500 500">
                          <path
                            id="curve"
                            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                          />
                          <text className="textpath">
                            <textPath xlinkHref="#curve">
                              {brain.brainName}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className={"team_title"}>
                        <h4>{brain.brainTitle}</h4>
                      </div>
                    </div>
                  </Grid>
                );
              } else if (index === 4) {
                return (
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
                    <div className="team_brain_box">
                      <div
                        className={"team_brain"}
                        style={{
                          backgroundImage: `url(${brain.brainImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <svg viewBox="0 0 500 500">
                          <path
                            id="curve"
                            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                          />
                          <text className="textpath">
                            <textPath xlinkHref="#curve">
                              {brain.brainName}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className={"team_title"}>
                        <h4>{brain.brainTitle}</h4>
                      </div>
                    </div>
                  </Grid>
                );
              } else {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    key={index}
                  >
                    <div className="team_brain_box">
                      <div
                        className={"team_brain"}
                        style={{
                          backgroundImage: `url(${brain.brainImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <svg viewBox="0 0 500 500">
                          <path
                            id="curve"
                            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                          />
                          <text className="textpath">
                            <textPath xlinkHref="#curve">
                              {brain.brainName}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className={"team_title"}>
                        <h4>{brain.brainTitle}</h4>
                      </div>
                    </div>
                  </Grid>
                );
              }
            };
            return <>{getGridItem()}</>;
          })}
        </Grid>
      );
    }
  };
  return (
    <div>
      {renderTeamTraits()}
      {renderTeamBrains()}
    </div>
  );
};

export default MemberSection;
