import React from "react";
import { Grid } from "@material-ui/core";

const SectionInspire = ({ inspireHeadingOne, inspireHeadingTwo, css }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      <div className={`${css}`}>
        <div>
          <div>
            <h4>
              {" "}
              <span id={"slash"}>|</span> {inspireHeadingOne}
            </h4>
          </div>
          <div>
            <h4>
              {" "}
              <span id={"slash"}>|</span> {inspireHeadingTwo}
            </h4>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default SectionInspire;
