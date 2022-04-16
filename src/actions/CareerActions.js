import React, { useEffect } from "react";
import db from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateCareerHeader,
  updateCareerImage,
  updateCareerIntro,
  updateCareerJobs,
  updateCareerJoinHeader,
  updateCareerLoveOne,
  updateCareerLoveThree,
  updateCareerLoveTwo,
  updateCareerSpotHeader,
} from "../features/careerSlice";

const CareerActions = () => {
  //-> redux dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    //-> Get the career page header
    const getCareerHeader = async () => {
      try {
        db.collection("careers")
          .doc("careerHeaderIntro")
          .collection("info")
          .doc("careerHeader")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateCareerHeader({
                    careerHeader: data.careerHeader,
                  })
                );
              }
            },
            function (error) {
              console.log(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    };

    //-> Get the career intro
    const getCareerIntro = async () => {
      try {
        db.collection("careers")
          .doc("careerHeaderIntro")
          .collection("info")
          .doc("careerIntro")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateCareerIntro({
                    careerIntro: data.careerIntro,
                  })
                );
              }
            },
            function (error) {
              console.log(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    };

    //-> Get the career intro
    const getCareerImage = async () => {
      try {
        db.collection("careers")
          .doc("careerHeaderIntro")
          .collection("illustration")
          .doc("image")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateCareerImage({
                    careerImage: data.careerImage,
                  })
                );
              }
            },
            function (error) {
              console.log(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    };

    //-> Get the career job posts
    const getCareerJobs = async () => {
      try {
        db.collection("careers")
          .doc("careerJobPosts")
          .collection("info")
          .onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(
              updateCareerJobs({
                careerJobs: data,
              })
            );
          });
      } catch (err) {
        console.error(err);
      }
    };

    //-> Get the career join header
    const getCareerJoinHeader = async () => {
      try {
        db.collection("careers")
          .doc("careerJoin")
          .collection("info")
          .doc("careerJoinHeader")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateCareerJoinHeader({
                    careerJoinHeader: data.careerJoinHeader,
                  })
                );
              }
            },
            function (error) {
              console.log(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    };

    //-> Get the career love one
    const getCareerLoveOne = async () => {
      try {
        db.collection("careers")
          .doc("careerLove")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateCareerLoveOne({
                    careerLoveOne: data.careerLoveOne,
                  })
                );
              }
            },
            function (error) {
              console.log(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    };

    //-> Get the career love two
    const getCareerLoveTwo = async () => {
      try {
        db.collection("careers")
          .doc("careerLove")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateCareerLoveTwo({
                    careerLoveTwo: data.careerLoveTwo,
                  })
                );
              }
            },
            function (error) {
              console.log(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    };

    //-> Get the career love three
    const getCareerLoveThree = async () => {
      try {
        db.collection("careers")
          .doc("careerLove")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateCareerLoveThree({
                    careerLoveThree: data.careerLoveThree,
                  })
                );
              }
            },
            function (error) {
              console.log(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    };

    //-> Get the career spot header
    const getCareerSpotHeader = async () => {
      try {
        db.collection("careers")
          .doc("careerSpot")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateCareerSpotHeader({
                    careerSpotHeader: data.careerSpot,
                  })
                );
              }
            },
            function (error) {
              console.log(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    };

    getCareerHeader();
    getCareerIntro();
    getCareerImage();
    getCareerJobs();
    getCareerJoinHeader();
    getCareerLoveOne();
    getCareerLoveTwo();
    getCareerLoveThree();
    getCareerSpotHeader();
  }, [dispatch]);

  return <></>;
};

export default CareerActions;
