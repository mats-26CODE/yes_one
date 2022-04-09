import React from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";

const SectionInspire = ({ products }) => {
  const renderProducts = () => {
    if (!_.isEmpty(products)) {
      const productsData = products.designProducts;
      const productsCycle = _.map(productsData, (product) => product);
      return (
        <Grid container>
          {productsCycle.map((product, index) => {
            const cssClassName = () => {
              if (index === 0) {
                return "design_inspire_box";
              } else if (index === 1) {
                return "design_inspire_box_two";
              } else {
                return "design_inspire_box_three";
              }
            };
            return (
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
                <div className={cssClassName()}>
                  <div>
                    <div>
                      <h4>
                        {" "}
                        <span id={"slash"}>|</span> {product.productCircleOne}
                      </h4>
                    </div>
                    <div>
                      <h4>
                        {" "}
                        <span id={"slash"}>|</span> {product.productCircleTwo}
                      </h4>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      );
    } else {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={"design_inspire_box"}>
              <div>
                <div>
                  <h4>
                    {" "}
                    <span id={"slash"}>|</span> Prototyping
                  </h4>
                </div>
                <div>
                  <h4>
                    {" "}
                    <span id={"slash"}>|</span> Wireframes
                  </h4>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      );
    }
  };

  return <div>{renderProducts()}</div>;
};

export default SectionInspire;
