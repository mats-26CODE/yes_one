import React from "react";
import { Grid } from "@material-ui/core";

const SectionDesigns = ({ designArtwork }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="design__artwork">
          <img src={designArtwork} alt={`${designArtwork} artwork`} />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="design__artwork">
          <img src={designArtwork} alt={`${designArtwork} artwork`} />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="design__artwork">
          <img src={designArtwork} alt={`${designArtwork} artwork`} />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="design__artwork">
          <img src={designArtwork} alt={`${designArtwork} artwork`} />
        </div>
      </Grid>
    </Grid>
  );
};

export default SectionDesigns;
