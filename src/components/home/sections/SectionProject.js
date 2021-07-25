import React from "react";
import { Grid } from "@material-ui/core";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import _ from "lodash";

//-> redux data selector
import { selectComboProjects } from "../../../features/home/homeSlice";
import { useSelector } from "react-redux";

const SectionProject = () => {
  //-> redux data selected
  const homeComboProjects = useSelector(selectComboProjects);

  const projectsData = () => {
    if (homeComboProjects !== null) {
      const projectsData = homeComboProjects.comboProjects;
      const projects = _.map(projectsData, (project) => project);
      return (
        <AwesomeSlider
          cssModule={AwesomeSliderStyles}
          animation="fold-out-animation"
          mobileTouch={true}
          bullets={true}
          organicArrows={true}
        >
          {projects.map((project) => {
            return (
              //   <h5>{product.homeProduct} <span><FaFan className={"fanIcon"} /></span></h5>
              <div
                className={"projects_slider"}
                style={{
                  backgroundImage: `url(${project.projectImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p>{project.projectDescription}</p>
              </div>
            );
          })}
        </AwesomeSlider>
      );
    } else {
      return (
        <AwesomeSlider
          cssModule={AwesomeSliderStyles}
          animation="fold-out-animation"
          mobileTouch={true}
          bullets={true}
          organicArrows={true}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <div>
              <p style={{ color: "white" }}>PROJECTS WILL BE HERE SOON!</p>
            </div>
          </div>
        </AwesomeSlider>
      );
    }
  };

  return (
    <div className={"section_projects_container"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div>
            <h4>Our Combo Projects</h4>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div>{projectsData()}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SectionProject;
