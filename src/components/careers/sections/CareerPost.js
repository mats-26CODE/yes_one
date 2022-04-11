import React from "react";
import _ from "lodash";
import { Grid } from "@material-ui/core";

//->component imports
import CareerPostCard from "./cards/CareerPostCard";

const CareerPost = ({ jobPosts }) => {
  const renderJobPosts = () => {
    if (!_.isEmpty(jobPosts)) {
      const jobPostsData = jobPosts.careerJobs;
      const _jobs = _.map(jobPostsData, (job) => job);
      return (
        <Grid container>
          {_jobs.map((job, index) => {
            return <CareerPostCard job={job} key={index} />;
          })}
        </Grid>
      );
    }
  };
  return <div>{renderJobPosts()}</div>;
};

export default CareerPost;
