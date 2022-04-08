import React from "react";
import { Grid } from "@material-ui/core";

const SectionThree = () => {
  return (
    <div className={"more__products_box"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="product__header">
            <h4>
              More of solutions we offer <span id={"slash"}>/</span>
            </h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="more_product">
            <div>
              <h5>
                AI Solutions <span id={"slash"}>/</span>
              </h5>
              <p>
                From planning, analysis, design, implementation, testing &
                integration to maintenance, We engineer operable, transitional
                and maintanable solutions. Our team of developers work hand in
                hand to make sure the product at handhas the best code,
                functional features and the best user experience.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="more_product">
            <div>
              <h5>
                Machine Learning <span id={"slash"}>/</span>
              </h5>
              <p>
                From planning, analysis, design, implementation, testing &
                integration to maintenance, We engineer operable, transitional
                and maintanable solutions. Our team of developers work hand in
                hand to make sure the product at handhas the best code,
                functional features and the best user experience.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="more_product">
            <div>
              <h5>
                IoT Solutions <span id={"slash"}>/</span>
              </h5>
              <p>
                From planning, analysis, design, implementation, testing &
                integration to maintenance, We engineer operable, transitional
                and maintanable solutions. Our team of developers work hand in
                hand to make sure the product at handhas the best code,
                functional features and the best user experience.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SectionThree;
