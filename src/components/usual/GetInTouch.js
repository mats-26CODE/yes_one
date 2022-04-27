import React from "react";
import { Grid } from "@material-ui/core";

//-> components imports
import Button from "../usual/Button";

//-> icon imports
import {
  IoPhonePortraitOutline,
  IoTabletPortraitOutline,
} from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";
import { isMobile } from "react-device-detect";

const GetInTouch = () => {
  return (
    <div className={"contact"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="contact__box">
            {isMobile ? (
              <div className="contact__screen">
                <IoPhonePortraitOutline className="screenIcon" />
              </div>
            ) : (
              <div className="contact__screen_box">
                <IoPhonePortraitOutline className="screenIcon" />
                <IoTabletPortraitOutline className="screenIcon2" />
                <IoIosDesktop className="screenIcon3" />
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="contact__box">
            <h4>
              Want a custom software, solution and or a design ? Something
              amazing could come from combining your vision with our expertise{" "}
            </h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="contact__box">
            <Button text={"Get in touch"} inTouch={true} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GetInTouch;
