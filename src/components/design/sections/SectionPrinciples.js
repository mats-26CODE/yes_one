import React from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";

//-> files import
import designPop from "../../../assets/images/designPop.jpg";
import { RiPenNibFill } from "react-icons/ri";
import { GiEyedropper, GiFairyWand, GiMagnifyingGlass } from "react-icons/gi";

const SectionPrinciples = ({ principleImage, principleData }) => {
  const renderPrinciples = () => {
    if (!_.isEmpty(principleData)) {
      const principlesData = principleData.designPrinciples;
      const principles = _.map(principlesData, (principle) => principle);
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="design__principle_header">
              <h4>
                Our Design Principles <span id={"slash"}>/</span>
              </h4>
            </div>
          </Grid>
          {principles.map((principle, index) => {
            const getIcon = () => {
              if (index === 0) {
                return <RiPenNibFill className="designPrincipleIcon" />;
              } else if (index === 1) {
                return <GiFairyWand className="designPrincipleIcon" />;
              } else if (index === 2) {
                return <GiEyedropper className="designPrincipleIcon" />;
              } else {
                return <GiMagnifyingGlass className="designPrincipleIcon" />;
              }
            };
            return (
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} key={index}>
                <div className="design__principle">
                  <div>
                    <div>{getIcon()}</div>
                    <div>
                      <h5>
                        {principle.designGeekHeader} <span id={"slash"}>/</span>
                      </h5>
                      <p>{principle.designGeekInfo}</p>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      );
    } else {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="design__principle_header">
              <h4>
                Our Design Principles <span id={"slash"}>/</span>
              </h4>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <div className="design__principle">
              <div>
                <div>
                  <RiPenNibFill className="designPrincipleIcon" />
                </div>
                <div>
                  <h5>
                    Emphasis <span id={"slash"}>/</span>
                  </h5>
                  <p>Clear, concise and essential information.</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <div className="design__principle">
              <div>
                <div>
                  <GiFairyWand className="designPrincipleIcon" />
                </div>
                <div>
                  <h5>
                    Balance & Alignment <span id={"slash"}>/</span>
                  </h5>
                  <p>
                    Symmetrical, Asymetrical ? we got you. color, texture ?
                    count on us.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <div className="design__principle">
              <div>
                <div>
                  <GiEyedropper className="designPrincipleIcon" />
                </div>
                <div>
                  <h5>
                    Contrast <span id={"slash"}>/</span>
                  </h5>
                  <p>Clearly, our designs “pop”.</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <div className="design__principle">
              <div>
                <div>
                  <GiMagnifyingGlass className="designPrincipleIcon" />
                </div>
                <div>
                  <h5>
                    Movement <span id={"slash"}>/</span>
                  </h5>
                  <p>
                    Our designs ensure every layer creates a story and narrative
                    with the next.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      );
    }
  };
  return (
    <div className="design__principles_box">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="design__image_box">
            {principleImage ? (
              <img src={principleImage} alt="design artwork" />
            ) : (
              <img src={designPop} alt="design artwork" />
            )}
          </div>
        </Grid>
      </Grid>
      {renderPrinciples()}
    </div>
  );
};

export default SectionPrinciples;
