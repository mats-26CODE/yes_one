import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import "./css/Development.css";
import { useSelector } from "react-redux";

//-> component imports
import Section from "./sections/Section";
import NoteCalloutLeft from "../usual/NoteCalloutLeft";
import NoteCalloutRight from "../usual/NoteCalloutRight";
import appDesign from "../../assets/images/appdesign.jpg";
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
  selectDevSectionOneTraits,
  selectDevSectionTwoTraits,
  selectDevSectionThreeTraits,
  selectDevSectionFourTraits,
} from "../../features/developmentSlice";
import SectionTwo from "./sections/SectionTwo";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import SectionThree from "./sections/SectionThree";
import GetInTouch from "../usual/GetInTouch";
import Traits from "./subComponents/Traits";

const Development = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //-> development page details from redux store
  const devHeader = useSelector(selectDevHeader);
  const devIntro = useSelector(selectDevIntro);
  const devQuote = useSelector(selectDevQuote);
  const devQuotee = useSelector(selectDevQuotee);
  const devQuoteImage = useSelector(selectDevQuoteImage);

  const devSectionOneHeader = useSelector(selectDevSectionOneHeader);
  const devSectionOneIntro = useSelector(selectDevSectionOneIntro);
  const devSectionOneImage = useSelector(selectDevSectionOneImage);
  const devSectionOneTraits = useSelector(selectDevSectionOneTraits);

  const devSectionTwoHeader = useSelector(selectDevSectionTwoHeader);
  const devSectionTwoIntro = useSelector(selectDevSectionTwoIntro);
  const devSectionTwoImage = useSelector(selectDevSectionTwoImage);
  const devSectionTwoTraits = useSelector(selectDevSectionTwoTraits);

  const devSectionThreeHeader = useSelector(selectDevSectionThreeHeader);
  const devSectionThreeIntro = useSelector(selectDevSectionThreeIntro);
  const devSectionThreeImage = useSelector(selectDevSectionThreeImage);
  const devSectionThreeTraits = useSelector(selectDevSectionThreeTraits);

  const devSectionFourHeader = useSelector(selectDevSectionFourHeader);
  const devSectionFourIntro = useSelector(selectDevSectionFourIntro);
  const devSectionFourImage = useSelector(selectDevSectionFourImage);
  const devSectionFourTraits = useSelector(selectDevSectionFourTraits);

  //-> render sections data
  const renderSectionOne = () => {
    if (devSectionOneHeader && devSectionOneIntro && devSectionOneImage) {
      return (
        <Section
          introLeft={false}
          artwork={true}
          artworkImage={`${devSectionOneImage.devSectionOneImage}`}
          traits={renderSectionOneTraits()}
          artworkSize={"cover"}
          artworkRepeat={"no-repeat"}
          artworkPosition={"center"}
          headingPresent={true}
          heading={`${devSectionOneHeader.devSectionOneHeader}`}
          intro={`${devSectionOneIntro.devSectionOneIntro}`}
          noteCalloutRightOne={<NoteCalloutRight top={true} slash={" </> "} />}
          noteCalloutRightTwo={<NoteCalloutRight top={false} slash={" </> "} />}
        />
      );
    } else {
      return (
        <Section
          introLeft={false}
          artwork={true}
          artworkImage={`${appDesign}`}
          artworkSize={"cover"}
          artworkRepeat={"no-repeat"}
          artworkPosition={"center"}
          headingPresent={true}
          heading={"Our Approach"}
          intro={
            "The mobile device you choose is a personal choice - we honour that by building mobile apps natively, and stick to that familiar, personal experience."
          }
          noteCalloutRightOne={<NoteCalloutRight top={true} slash={" </> "} />}
          noteCalloutRightTwo={<NoteCalloutRight top={false} slash={" </> "} />}
        />
      );
    }
  };

  //-> render sections data
  const renderSectionTwo = () => {
    if (devSectionTwoHeader && devSectionTwoIntro && devSectionTwoImage) {
      return (
        <Section
          introLeft={true}
          artwork={true}
          artworkImage={`${devSectionTwoImage.devSectionTwoImage}`}
          traits={renderSectionTwoTraits()}
          artworkSize={"cover"}
          artworkRepeat={"no-repeat"}
          artworkPosition={"center"}
          headingPresent={true}
          heading={`${devSectionTwoHeader.devSectionTwoHeader}`}
          intro={`${devSectionTwoIntro.devSectionTwoIntro}`}
          noteCalloutLeftOne={<NoteCalloutLeft top={true} slash={" </> "} />}
          noteCalloutLeftTwo={<NoteCalloutLeft top={false} slash={" </> "} />}
        />
      );
    } else {
      return (
        <Section
          introLeft={true}
          artwork={true}
          artworkImage={`${appDesign}`}
          artworkSize={"cover"}
          artworkRepeat={"no-repeat"}
          artworkPosition={"center"}
          headingPresent={true}
          heading={"Our Approach"}
          intro={
            "The mobile device you choose is a personal choice - we honour that by building mobile apps natively, and stick to that familiar, personal experience."
          }
          noteCalloutLeftOne={<NoteCalloutLeft top={true} slash={" </> "} />}
          noteCalloutLeftTwo={<NoteCalloutLeft top={false} slash={" </> "} />}
        />
      );
    }
  };

  //-> render sections data
  const renderSectionThree = () => {
    if (devSectionThreeHeader && devSectionThreeIntro && devSectionThreeImage) {
      return (
        <SectionTwo
          heading={`${devSectionThreeHeader.devSectionThreeHeader}`}
          intro={`${devSectionThreeIntro.devSectionThreeIntro}`}
          productImage={`${devSectionThreeImage.devSectionThreeImage}`}
          traits={renderSectionThreeTraits()}
        />
      );
    } else {
      return (
        <SectionTwo
          heading={"Mobile Apps"}
          intro={
            "From planning, analysis, design, implementation, testing & integration to maintenance, We engineer operable, transitional and maintanable solutions. Our team of developers work hand in hand to make sure the product at handhas the best code, functional features and the best user experience."
          }
          productImage={appDesign}
        />
      );
    }
  };

  //-> render sections data
  const renderSectionFour = () => {
    if (devSectionFourHeader && devSectionFourIntro && devSectionFourImage) {
      return (
        <SectionTwo
          heading={`${devSectionFourHeader.devSectionFourHeader}`}
          intro={`${devSectionFourIntro.devSectionFourIntro}`}
          productImage={`${devSectionFourImage.devSectionFourImage}`}
          traits={renderSectionFourTraits()}
        />
      );
    } else {
      return (
        <SectionTwo
          heading={"Web Apps"}
          intro={
            "From planning, analysis, design, implementation, testing & integration to maintenance, We engineer operable, transitional and maintanable solutions. Our team of developers work hand in hand to make sure the product at handhas the best code, functional features and the best user experience."
          }
          productImage={appDesign}
        />
      );
    }
  };

  //-> get traits
  const renderSectionOneTraits = () => {
    return <Traits secOneTraits={devSectionOneTraits} secOne={true} />;
  };
  const renderSectionTwoTraits = () => {
    return <Traits secTwoTraits={devSectionTwoTraits} secTwo={true} />;
  };
  const renderSectionThreeTraits = () => {
    return <Traits secThreeTraits={devSectionThreeTraits} secThree={true} />;
  };
  const renderSectionFourTraits = () => {
    return <Traits secFourTraits={devSectionFourTraits} secFour={true} />;
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
                hand to make sure the product at hand has the best code,
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
          ) : (
            <div
              className={"dev_art_box"}
              style={{
                backgroundImage: `url(${appDesign})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          )}

          {devQuote && devQuotee ? (
            <div className={"dev__quote_box"}>
              <div>
                <p>{devQuote.devQuote}</p>
                <h4>{devQuotee.devQuotee}</h4>
              </div>
            </div>
          ) : (
            <div className={"dev__quote_box"}>
              <div>
                <p>
                  "The best solutions require a great deal of problem
                  identification."
                </p>
                <h4>By Anonymous</h4>
              </div>
            </div>
          )}
        </Grid>
      </Grid>

      <div className={"development_section"}>{renderSectionOne()}</div>
      <div className={"development_section"}>{renderSectionTwo()}</div>

      <div className={"development_products"}>
        <div className={"dev_product"}>{renderSectionThree()}</div>
        <div className={"dev_product"}>{renderSectionFour()}</div>
        <div className={"dev_product"}>
          <SectionThree />
        </div>
        <div>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default Development;
