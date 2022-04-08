import React from "react";
import { Grid } from "@material-ui/core";

//-> files import
import designPop from "../../../assets/images/designPop.jpg";
import { RiPenNibFill } from "react-icons/ri";
import { GiEyedropper, GiFairyWand, GiMagnifyingGlass } from "react-icons/gi";

const SectionPrinciples = () => {
  return (
    <div className="design__principles_box">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="design__image_box">
            <img src={designPop} alt="design artwork" />
          </div>
        </Grid>
      </Grid>
      <Grid container>
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
                  Symmetrical, Asymetrical ? we got you. color, texture ? count
                  on us.
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
    </div>
  );
};

export default SectionPrinciples;
