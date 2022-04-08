import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { isBrowser, isMobile } from "react-device-detect";
import "./css/Careers.css";

//-> react icons imports
import { BiNotepad } from "react-icons/bi";
import { ImPencil } from "react-icons/im";
import { BsPen } from "react-icons/bs";
import { GiSunglasses, GiSecretBook, GiLightBackpack } from "react-icons/gi";
import { IoIosLaptop, IoIosPeople } from "react-icons/io";
import { FaRegHandshake, FaRegKeyboard } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";
import { CgMouse } from "react-icons/cg";
import { IoCheckboxOutline } from "react-icons/io5";

//-> component imports
import CareerPost from "./sections/CareerPost";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={"careers_container"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={"careers_header_box"}>
            <h4>
              Career Growth <span id={"slash"}>/</span>
            </h4>
          </div>

          <div className={"careers_intro"}>
            <h5>
              Constantly growing and from us, we are constantly on alert looking
              for pin-point talents who would like to grow with us. If you are
              confident with your skills and have passion to work in our
              innovative team, find the right position for you below and shoot
              your shot.
            </h5>
          </div>
        </Grid>
      </Grid>

      <div className={"careers_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {isBrowser ? (
              <div className={"careers_art_box"}>
                <div>
                  <GiSecretBook size={"1em"} color={"#ffffff"} />
                  <ImPencil size={"4em"} color={"#ffffff"} />
                  <BsPen size={"5.5em"} color={"#ffffff"} />
                  <GiSunglasses size={"8.5em"} color={"#ffffff"} />
                  <IoIosLaptop size={"10em"} color={"#ffffff"} />
                  <FaRegKeyboard size={"8em"} color={"#ffffff"} />
                  <CgMouse size={"6em"} color={"#ffffff"} />
                  <GiLightBackpack size={"4em"} color={"#ffffff"} />
                  <SiCoffeescript size={"2em"} color={"#ffffff"} />
                  <FaRegHandshake size={"1em"} color={"#ffffff"} />
                </div>
              </div>
            ) : (
              <div className={"careers_art_box"}>
                <div>
                  <GiSecretBook size={"0.9em"} color={"#ffffff"} />
                  <BsPen size={"1em"} color={"#ffffff"} />
                  <GiSunglasses size={"2em"} color={"#ffffff"} />
                  <IoIosLaptop size={"2.5em"} color={"#ffffff"} />
                  <FaRegKeyboard size={"1.5em"} color={"#ffffff"} />
                  <CgMouse size={"1em"} color={"#ffffff"} />
                  {/* <GiLightBackpack size={'1em'} color={'#ffffff'}/> */}
                  <SiCoffeescript size={"1em"} color={"#ffffff"} />
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      <div className={"careers_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <CareerPost
              careerPostTitle={"Front-end Software Engineer - Full Time"}
              careerPostSkill={"React.js, Angular.js, React Native"}
              careerPostClick={
                "Are you the right fit for the job ? Click the arrow to apply now"
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <CareerPost
              careerPostTitle={"Back-end Software Engineer - Full Time"}
              careerPostSkill={"React.js, Angular.js, React Native"}
              careerPostClick={
                "Are you the right fit for the job ? Click the arrow to apply now"
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <CareerPost
              careerPostTitle={"Back-end Software Engineer - Full Time"}
              careerPostSkill={"React.js, Angular.js, React Native"}
              careerPostClick={
                "Are you the right fit for the job ? Click the arrow to apply now"
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <CareerPost
              careerPostTitle={"Creative Designer - Intern"}
              careerPostSkill={"React.js, Angular.js, React Native"}
              careerPostClick={
                "Are you the right fit for the job ? Click the arrow to apply now"
              }
            />
          </Grid>
        </Grid>
      </div>

      <div className={"careers_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"career_outro"}>
              <h4>Join the team</h4>
              <IoIosPeople size={"10em"} color={"#323232"} />
              <h5>
                Love technology ?{" "}
                <IoCheckboxOutline size={"1em"} color={"#F5A623"} /> Love to
                create ? <IoCheckboxOutline size={"1em"} color={"#F5A623"} />{" "}
                Love innovation ?{" "}
                <IoCheckboxOutline size={"1em"} color={"#F5A623"} /> <br />
                There is a spot for you at Yes Productions
              </h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Careers;
