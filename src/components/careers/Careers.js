import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import "./css/Careers.css";
import { useSelector } from "react-redux";

//-> react icons imports
import { IoCheckmarkDone } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";

//-> component imports
import CareerPost from "./sections/CareerPost";
import {
  selectCareerHeader,
  selectCareerImage,
  selectCareerIntro,
  selectCareerJobs,
  selectCareerJoinHeader,
  selectCareerLoveOne,
  selectCareerLoveThree,
  selectCareerLoveTwo,
  selectCareerSpotHeader,
} from "../../features/careerSlice";
import designPop from "../../assets/images/designPop.jpg";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //-> career page details / data from redux
  const careerHeader = useSelector(selectCareerHeader);
  const careerIntro = useSelector(selectCareerIntro);
  const careerImage = useSelector(selectCareerImage);
  const careerJobs = useSelector(selectCareerJobs);
  const careerJoinHeader = useSelector(selectCareerJoinHeader);
  const careerLoveOne = useSelector(selectCareerLoveOne);
  const careerLoveTwo = useSelector(selectCareerLoveTwo);
  const careerLoveThree = useSelector(selectCareerLoveThree);
  const careerSpotHeader = useSelector(selectCareerSpotHeader);

  return (
    <div className={"careers_container"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={"careers_header_box"}>
            {careerHeader ? (
              <h4>
                {careerHeader.careerHeader} <span id={"slash"}>/</span>
              </h4>
            ) : (
              <h4>
                Career Growth <span id={"slash"}>/</span>
              </h4>
            )}
          </div>

          <div className={"careers_intro"}>
            {careerIntro ? (
              <h5>{careerIntro.careerIntro}</h5>
            ) : (
              <h5>
                Constantly growing and from us, we are constantly on alert
                looking for pin-point talents who would like to grow with us. If
                you are confident with your skills and have passion to work in
                our innovative team, find the right position for you below and
                shoot your shot.
              </h5>
            )}
          </div>
        </Grid>
      </Grid>

      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"careers_art_box"}>
              {careerImage ? (
                <img src={careerImage.careerImage} alt="design artwork" />
              ) : (
                <img src={designPop} alt="design artwork" />
              )}
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={"careers_section"}>
        <CareerPost jobPosts={careerJobs} />
      </div>

      <div className={"careers_section"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"career_outro"}>
              {careerJoinHeader ? (
                <h4>{careerJoinHeader.careerJoinHeader}</h4>
              ) : (
                <h4>Join the team</h4>
              )}

              <IoIosPeople size={"10em"} color={"#323232"} />
              <div>
                <div className="career__love_box">
                  <Grid container>
                    {careerLoveOne ? (
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <h5>
                          {careerLoveOne.careerLoveOne}{" "}
                          <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                        </h5>
                      </Grid>
                    ) : (
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <h5>
                          Love technology ?{" "}
                          <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />{" "}
                        </h5>
                      </Grid>
                    )}
                    {careerLoveTwo ? (
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <h5>
                          {careerLoveTwo.careerLoveTwo}{" "}
                          <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                        </h5>
                      </Grid>
                    ) : (
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <h5>
                          Love technology ?{" "}
                          <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                        </h5>
                      </Grid>
                    )}
                    {careerLoveThree ? (
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <h5>
                          {careerLoveThree.careerLoveThree}{" "}
                          <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                        </h5>
                      </Grid>
                    ) : (
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <h5>
                          Love technology ?{" "}
                          <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                        </h5>
                      </Grid>
                    )}
                  </Grid>
                </div>

                {careerSpotHeader ? (
                  <h5>{careerSpotHeader.careerSpotHeader}</h5>
                ) : (
                  <h5>There is a spot for you at Yes Productions</h5>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Careers;
