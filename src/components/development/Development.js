import React from "react";
import { Grid } from "@material-ui/core";
import "./css/Development.css";
import { useSelector } from "react-redux";
import _ from "lodash";

//-> component imports
import Section from "./sections/Section";
import NoteCalloutLeft from "../usual/NoteCalloutLeft";
import NoteCalloutRight from "../usual/NoteCalloutRight";
import CircleArt from "../usual/CircleArt";
import CircleArtLeft from "../usual/CircleArtLeft";
import Button from "../usual/Button";
import {
  selectDevHeader,
  selectDevIntro,
  selectDevQuote,
  selectDevQuotee,
  selectDevQuoteImage,
  selectDevSectionOneHeader,
  selectDevSectionOneIntro,
  selectDevSectionOneImage,
  selectDevSectionTwoHeader,
  selectDevSectionTwoIntro,
  selectDevSectionTwoImage,
  selectDevSectionThreeHeader,
  selectDevSectionThreeIntro,
  selectDevSectionThreeImage,
  selectDevSectionFourHeader,
  selectDevSectionFourIntro,
  selectDevSectionFourImage,
} from "../../features/home/developmentSlice";

const Development = () => {
  //-> development page details from redux store
  const devHeader = useSelector(selectDevHeader);
  const devIntro = useSelector(selectDevIntro);
  const devQuote = useSelector(selectDevQuote);
  const devQuotee = useSelector(selectDevQuotee);
  const devQuoteImage = useSelector(selectDevQuoteImage);

  const devSectionOneHeader = useSelector(selectDevSectionOneHeader);
  const devSectionOneIntro = useSelector(selectDevSectionOneIntro);
  const devSectionOneImage = useSelector(selectDevSectionOneImage);

  const devSectionTwoHeader = useSelector(selectDevSectionTwoHeader);
  const devSectionTwoIntro = useSelector(selectDevSectionTwoIntro);
  const devSectionTwoImage = useSelector(selectDevSectionTwoImage);

  const devSectionThreeHeader = useSelector(selectDevSectionThreeHeader);
  const devSectionThreeIntro = useSelector(selectDevSectionThreeIntro);
  const devSectionThreeImage = useSelector(selectDevSectionThreeImage);

  const devSectionFourHeader = useSelector(selectDevSectionFourHeader);
  const devSectionFourIntro = useSelector(selectDevSectionFourIntro);
  const devSectionFourImage = useSelector(selectDevSectionFourImage);

  //-> render sections data
  const renderSectionOne = () => {
    if (devSectionOneHeader && devSectionOneIntro && devSectionOneImage) {
      return (
        <Section
          introLeft={true}
          artwork={true}
          artworkImage={`${devSectionOneImage.devSectionOneImage}`}
          artworkSize={"cover"}
          artworkRepeat={"no-repeat"}
          artworkPosition={'center'}
          headingPresent={true}
          heading={`${devSectionOneHeader.devSectionOneHeader}`}
          intro={`${devSectionOneIntro.devSectionOneIntro}`}
          noteCalloutRightOne={
            <NoteCalloutRight top={true} slash={" < / > "} />
          }
          noteCalloutRightTwo={
            <NoteCalloutRight top={false} slash={" < / > "} />
          }
        />
      );
    }
  };

  //-> render sections data
  const renderSectionTwo = () => {
    if (devSectionTwoHeader && devSectionTwoIntro && devSectionTwoImage) {
      return (
        <Section
          introLeft={false}
          artwork={true}
          artworkImage={`${devSectionTwoImage.devSectionTwoImage}`}
          artworkSize={"cover"}
          artworkRepeat={"no-repeat"}
          artworkPosition={'center'}
          headingPresent={true}
          heading={`${devSectionTwoHeader.devSectionTwoHeader}`}
          intro={`${devSectionTwoIntro.devSectionTwoIntro}`}
          noteCalloutRightOne={
            <NoteCalloutRight top={true} slash={" < / > "} />
          }
          noteCalloutRightTwo={
            <NoteCalloutRight top={false} slash={" < / > "} />
          }
        />
      );
    }
  };

  //-> render sections data
  const renderSectionThree = () => {
    if (devSectionThreeHeader && devSectionThreeIntro && devSectionThreeImage) {
      return (
        <Section
          introLeft={true}
          artwork={true}
          artworkImage={`${devSectionThreeImage.devSectionThreeImage}`}
          artworkSize={"cover"}
          artworkRepeat={"no-repeat"}
          artworkPosition={'center'}
          headingPresent={true}
          heading={`${devSectionThreeHeader.devSectionThreeHeader}`}
          intro={`${devSectionThreeIntro.devSectionThreeIntro}`}
          noteCalloutRightOne={
            <NoteCalloutRight top={true} slash={" < / > "} />
          }
          noteCalloutRightTwo={
            <NoteCalloutRight top={false} slash={" < / > "} />
          }
        />
      );
    }
  };

  //-> render sections data
  const renderSectionFour = () => {
    if (devSectionFourHeader && devSectionFourIntro && devSectionFourImage) {
      return (
        <Section
          introLeft={false}
          artwork={true}
          artworkImage={`${devSectionFourImage.devSectionFourImage}`}
          artworkSize={"cover"}
          artworkRepeat={"no-repeat"}
          artworkPosition={'center'}
          headingPresent={true}
          heading={`${devSectionFourHeader.devSectionFourHeader}`}
          intro={`${devSectionFourIntro.devSectionFourIntro}`}
          noteCalloutRightOne={
            <NoteCalloutRight top={true} slash={" < / > "} />
          }
          noteCalloutRightTwo={
            <NoteCalloutRight top={false} slash={" < / > "} />
          }
        />
      );
    }
  };

  return (
    <div className={"development_container"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={"dev_header_box"}>
            {devHeader ? (
              <h4>
                {devHeader.devHeader} <span id={"slash"}>/</span>
              </h4>
            ) : (
              <h4>
                Development <span id={"slash"}>/</span>
              </h4>
            )}
          </div>

          <div className={"dev_intro"}>
            {devIntro ? (
              <h5>{devIntro.devIntro}</h5>
            ) : (
              <h5>
                From planning, analysis, design, implementation, testing &
                integration to maintenance, We engineer operable, transitional
                and maintanable solutions. Our team of developers work hand in
                hand to make sure the product at handhas the best code,
                functional features and the best user experience.
              </h5>
            )}
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {devQuoteImage ? (
            <div
              className={"dev_art_box"}
              style={{
                backgroundImage: `url(${devQuoteImage.devQuoteImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          ) : null}

          {devQuote && devQuotee ? (
            <div className={"dev__quote_box"}>
              <div>
                <p>{devQuote.devQuote}</p>
                <h4>{devQuotee.devQuotee}</h4>
              </div>
            </div>
          ) : null}
        </Grid>
      </Grid>

      <div className={"development_section"}>{renderSectionOne()}</div>

      <div className={"development_section"}>{renderSectionTwo()}</div>

      <div className={"development_test_support"}>
        {/* <div className={"dev_curve"}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={"dev_art_box_curve"}></div>
            </Grid>
          </Grid>
        </div> */}
        <div className={"development_section"}>{renderSectionThree()}</div>

        <div className={"development_section"}>{renderSectionFour()}</div>

        <div className={"development_section"}>
          <div className={"contact"}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div>
                  <h4>Want a custom software and or a design ? </h4>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div>
                  <Button text={"Get in touch"} />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
