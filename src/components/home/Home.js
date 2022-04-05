import React from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";
import { IoCheckmarkDone, IoPeopleCircleOutline } from "react-icons/io5";
import { ImPen } from "react-icons/im";
import { FaFan } from "react-icons/fa";
import { useSelector } from "react-redux";

//-> css and components file import
import "./css/Home.css";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import NoteCalloutRight from "../usual/NoteCalloutRight";
import ButtonTwo from "../usual/ButtonTwo";
import NoteCalloutLeft from "../usual/NoteCalloutLeft";
import OurTeam from "../usual/OurTeam";
import SectionProject from "./sections/SectionProject";
import bgOne from "../../assets/backgrounds/bgOne.png";

import {
  selectHomeHeader,
  selectHomeProducts,
  selectSectionOneHeader,
  selectSectionOneIntro,
  selectSectionOneImage,
  selectSectionTwoHeader,
  selectSectionTwoIntro,
  selectSectionTwoImage,
  selectSectionThreeHeader,
  selectSectionThreeIntro,
  selectSectionThreeImage,
} from "../../features/home/homeSlice";

const Home = () => {
  //-> home details from redux store
  const homeHeader = useSelector(selectHomeHeader);
  const homeProducts = useSelector(selectHomeProducts);
  const sectionOneHeader = useSelector(selectSectionOneHeader);
  const sectionOneIntro = useSelector(selectSectionOneIntro);
  const sectionOneImage = useSelector(selectSectionOneImage);
  const sectionTwoHeader = useSelector(selectSectionTwoHeader);
  const sectionTwoIntro = useSelector(selectSectionTwoIntro);
  const sectionTwoImage = useSelector(selectSectionTwoImage);
  const sectionThreeHeader = useSelector(selectSectionThreeHeader);
  const sectionThreeIntro = useSelector(selectSectionThreeIntro);
  const sectionThreeImage = useSelector(selectSectionThreeImage);

  const productsData = () => {
    if (homeProducts !== null) {
      const productsData = homeProducts.products;
      const products = _.map(productsData, (product) => product);
      return (
        <div className={"home_apps"}>
          {products.map((product, index) => {
            return (
              <h5 key={index}>
                {product.homeProduct}{" "}
                <span>
                  <FaFan className={"fanIcon"} />
                </span>
              </h5>
            );
          })}
        </div>
      );
    } else {
      return <p style={{ color: "white" }}>No data!</p>;
    }
  };

  return (
    <div className={"home_container"}>
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"home_intro"}>
              {homeHeader ? (
                <h4>{homeHeader.header}</h4>
              ) : (
                <h4>
                  At Yes Productions, we design and develop softwares for our
                  clients _ be one.
                </h4>
              )}
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>{productsData()}</div>
          </Grid>
        </Grid>
      </div>

      <div className={"home_cards_box"}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={"home_card_one"}>
              <div>
                <h4>Operable</h4>
              </div>
              <div>
                <div>
                  <h5>Usability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Efficiency</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Correctness</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Functionality</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={"home_card_two"}>
              <div>
                <div>
                  <h5>Portability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Adaptability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Reusability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
              </div>
              <div>
                <h4>Transitional</h4>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={"home_card_one"}>
              <div>
                <h4>Maintanable</h4>
              </div>
              <div>
                <div>
                  <h5>Maintanability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Flexibility</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Scalability</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Modularity</h5>
                  <IoCheckmarkDone color={"#F5A623"} size={"1.1em"} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          backgroundImage: `url(${bgOne})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SectionOne
          noteCalloutRight={<NoteCalloutRight slash={"< / >"} top={true} />}
          artClassName={"section_art_box"}
          bgImage={bgOne}
          artworkImage={
            sectionOneImage ? `${sectionOneImage.sectionOneImage}` : null
          }
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          heading={
            sectionOneHeader
              ? `${sectionOneHeader.sectionOneHeader}`
              : "Development"
          }
          intro={
            sectionOneIntro
              ? `${sectionOneIntro.sectionOneIntro}`
              : "We love engineering your ideas into viable, productive products that will boost your business experience."
          }
          button={<ButtonTwo text={"Learn more"} />}
        />
      </div>

      <div>
        <SectionTwo
          noteCalloutLeft={
            <NoteCalloutLeft
              icon={
                <ImPen
                  color={"#ffffff"}
                  size={"1.2em"}
                  style={{ transform: "rotate(-90deg)" }}
                />
              }
              top={true}
            />
          }
          bgImage={bgOne}
          artworkImage={
            sectionTwoImage ? `${sectionTwoImage.sectionTwoImage}` : null
          }
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          heading={
            sectionTwoHeader ? `${sectionTwoHeader.sectionTwoHeader}` : "Design"
          }
          intro={
            sectionTwoIntro
              ? `${sectionTwoIntro.sectionTwoIntro}`
              : "We have the best creative minds on board, we shape ideas into beautiful functional products, as good as you can imagine."
          }
          button={<ButtonTwo text={"See more"} />}
        />
      </div>

      <div>
        <SectionOne
          team={
            <OurTeam
              memberOne={
                sectionThreeImage
                  ? `${sectionThreeImage.sectionThreeImage}`
                  : null
              }
            />
          }
          artClassName={"team_art_box"}
          noteCalloutRight={
            <NoteCalloutRight
              icon={<IoPeopleCircleOutline color={"#F5F5F5"} size={"1.5em"} />}
              top={true}
            />
          }
          heading={
            sectionThreeHeader
              ? `${sectionThreeHeader.sectionThreeHeader}`
              : "The team behind"
          }
          intro={
            sectionThreeIntro
              ? `${sectionThreeIntro.sectionThreeIntro}`
              : "Our love for engineering, creativity & design is being cherished by our great team."
          }
          button={<ButtonTwo text={"Our adventures"} />}
        />
      </div>

      <div>
        <SectionProject />
      </div>
    </div>
  );
};

export default Home;
