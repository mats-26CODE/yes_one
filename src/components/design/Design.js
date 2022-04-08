import React from "react";
import { Grid } from "@material-ui/core";
import "./css/Design.css";
import { VscArrowDown } from "react-icons/vsc";

//-> component imports
import SectionInspire from "./sections/SectionInspire";
import SectionDesigns from "./sections/SectionDesigns";
import SectionPrinciples from "./sections/SectionPrinciples";
import GetInTouch from "../usual/GetInTouch";
import designPop from "../../assets/images/designPop.jpg";

const Design = () => {
  return (
    <div className={"design_container"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={"design_header_box"}>
            <h4>
              The Wow Factor <span id={"slash"}>/</span>
            </h4>
          </div>

          <div className={"design_intro"}>
            <h5>
              Whether its the magic wand tool, the pen tool or the brush tool
              etc, we care deeply on each pixel these tools touch. We have the
              best, passionate design team that care alot on every aspect of
              design, from the User Interface &#123;UI&#125; to the User
              Experience &#123;UX&#125;, we dedicate to bring you the best
              designed product.
            </h5>
          </div>
        </Grid>
      </Grid>

      <div className={"design_section"}>
        <SectionPrinciples />
      </div>

      <div className={"design_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"design_categories"}>
              <p>
                From{" "}
                <span>
                  UI/UX Design & Prototyping 👉 Logos 👉 Posters 👉 Labels 👉
                  Graphical Collaterals
                </span>{" "}
                and more
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="design__arrow_down">
              <VscArrowDown className={"arrowIcon"} />
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={"design_inspirebox"}>
        <div className={"dev_curve"}>
          <div className={"design_inspire"}>
            <Grid container>
              <SectionInspire
                css={"design_inspire_box"}
                inspireHeadingOne={"Prototyping"}
                inspireHeadingTwo={"Wireframes"}
              />
              <SectionInspire
                css={"design_inspire_box_two"}
                inspireHeadingOne={"Interface design"}
                inspireHeadingTwo={"Responsive"}
              />
              <SectionInspire
                css={"design_inspire_box_three"}
                inspireHeadingOne={"Illustrations"}
                inspireHeadingTwo={"Eye catching"}
              />
            </Grid>
          </div>
        </div>

        <div className={"design_section"}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={"design_arts_header"}>
                <h4>
                  Our Designs <span id={"slash"}>/</span>
                </h4>
              </div>
            </Grid>
          </Grid>

          <div className={"design_arts_section"}>
            <SectionDesigns designArtwork={designPop} />
          </div>
        </div>

        <div>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default Design;
