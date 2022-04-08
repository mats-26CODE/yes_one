import React from "react";
import { Grid } from "@material-ui/core";

const SectionTwo = ({ heading, intro, traits, productImage }) => {
  return (
    <div className="section__product_box">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="product__header">
            <h4>
              {heading} <span id={"slash"}>/</span>
            </h4>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="product__box">
            <div>
              <p>{intro}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="product__box_two">
            <div>
              <img src={productImage} alt={`${heading} artwork`} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="product__box">
            <div>{traits}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SectionTwo;
