import React from "react";
import { Grid } from "@material-ui/core";

//-> icon import
import { HiOutlineExternalLink } from "react-icons/hi";

const CareerPostCard = ({ job }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
      <div className={"career_post_container"}>
        <div className={"career_post_box"}>
          <div className={"career_post_info"}>
            <div>
              <h4>{job.careerPostHeader}</h4>
              <h5>{job.careerPostSkills}</h5>
              <p>{job.careerPostOutro}</p>
            </div>
          </div>
          <div className={"career_post_arrow"}>
            <HiOutlineExternalLink
              size={"2em"}
              color={"#F5A623"}
              className={"career_link"}
              onClick={() => window.open(job.careerPostLink)}
            />
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default CareerPostCard;
