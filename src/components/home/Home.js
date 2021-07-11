import React, { useEffect } from "react";
import db from "../../firebase";
import firebase from "firebase";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { Button, Grid } from "@material-ui/core";
import {
  IoEllipseSharp,
  IoCheckboxOutline,
  IoPeopleCircleOutline,
} from "react-icons/io5";
import { ImPen } from "react-icons/im";
import { useDispatch } from "react-redux";

//-> css and components file import
import "./css/Home.css";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import NoteCalloutRight from "../usual/NoteCalloutRight";
import ButtonTwo from "../usual/ButtonTwo";
import NoteCalloutLeft from "../usual/NoteCalloutLeft";
import OurTeam from "../usual/OurTeam";
import SectionProject from "./sections/SectionProject";
import { header } from "../../features/home/homeSlice";

const Home = () => {
  //-> redux dispatch
  const dispatch = useDispatch();

  //-> home fetching actions
  useEffect(() => {
    db.collection("home")
      .doc("homeHeaderIntro")
      .collection("homeHeader")
      .doc("info")
      .onSnapshot(
        function(doc) {
          //check if doc is available
          if (doc.exists) {
            const data = doc.data();
            dispatch(
              header({
                header: data.homeHeader,
              })
            );
            console.log("data", data);
          }
        },
        function (error) {
          console.log("Error fetching clients logos");
          console.log(error);
        }
      );
  }, []);

  return (
    <div className={"home_container"}>
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"home_intro"}>
              <h4>
                At Yes Productions, we design and develop softwares for our
                clients _ be one.
              </h4>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"home_apps"}>
              <h5>Mobile Apps</h5>
              <IoEllipseSharp color={"#ffffff"} size={"0.5em"} />
              <h5>Web Apps</h5>
            </div>
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
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Efficiency</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Correctness</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Functionality</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={"home_card_two"}>
              <div>
                <div>
                  <h5>Portability</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Adaptability</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Reusability</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
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
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Flexibility</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Scalability</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
                <div>
                  <h5>Modularity</h5>
                  <IoCheckboxOutline color={"#F5F5F5"} size={"1.1em"} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div>
        <SectionOne
          noteCalloutRight={<NoteCalloutRight slash={"< / >"} top={true} />}
          artClassName={"section_art_box"}
          heading={"Development"}
          intro={
            "We love engineering your ideas into viable, productive products that will boost your business experience."
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
          heading={"Design"}
          intro={
            "We have the best creative minds on board, we shape ideas into beautiful functional products, as good as you can imagine."
          }
          button={<ButtonTwo text={"See more"} />}
        />
      </div>

      <div>
        <SectionOne
          team={<OurTeam />}
          artClassName={"team_art_box"}
          noteCalloutRight={
            <NoteCalloutRight
              icon={<IoPeopleCircleOutline color={"#F5F5F5"} size={"1.5em"} />}
              top={true}
            />
          }
          heading={"The team behind"}
          intro={
            "Our love for engineering, creativity & design is being cherished by our great team."
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
