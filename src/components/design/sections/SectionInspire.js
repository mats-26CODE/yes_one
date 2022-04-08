import React from "react";
import { Grid } from "@material-ui/core";

//-> component imports
// import

const SectionInspire = ({ inspireHeadingOne, inspireHeadingTwo, css }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      <div className={`${css}`}>
        <div>
          <h4>{inspireHeadingOne}</h4>
        </div>
        <div>
          <h4>{inspireHeadingTwo}</h4>
        </div>
      </div>
    </Grid>
  );
};

export default SectionInspire;
