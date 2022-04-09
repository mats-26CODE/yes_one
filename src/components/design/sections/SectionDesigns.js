import React from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";
import designPop from "../../../assets/images/designPop.jpg";

const SectionDesigns = ({ designImages }) => {
  const renderImages = () => {
    if (!_.isEmpty(designImages)) {
      const imagesData = designImages.designWorkImages;
      const images = _.map(imagesData, (image) => image);
      return (
        <Grid container>
          {images.map((image, index) => {
            return (
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
                <div className="design__artwork">
                  <img src={image.designImage} alt={`${designPop} artwork`} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      );
    } else {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="design__artwork">
              <img src={designPop} alt={`${designPop} artwork`} />
            </div>
          </Grid>
        </Grid>
      );
    }
  };

  return <div>{renderImages()}</div>;
};

export default SectionDesigns;
