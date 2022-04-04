import React, { useEffect } from "react";
import db from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateHeader,
  updateIntro,
  updateQuote,
  updateQuotee,
  updateQuoteImage,
  updateSectionFour,
  updateSectionFourHeader,
  updateSectionFourImage,
  updateSectionFourIntro,
  updateSectionOneHeader,
  updateSectionOneImage,
  updateSectionOneIntro,
  updateSectionThree,
  updateSectionThreeHeader,
  updateSectionThreeImage,
  updateSectionThreeIntro,
  updateSectionTwo,
  updateSectionTwoHeader,
  updateSectionTwoImage,
  updateSectionTwoIntro,
} from "../features/home/developmentSlice";

const DevelopmentActions = () => {
  //-> redux dispatch
  const dispatch = useDispatch();

  //-> get development page data from the database
  useEffect(() => {
    //-> Get the development header and intro
    const getDevHeader = async () => {
      try {
        db.collection("development")
          .doc("devHeaderIntro")
          .collection("info")
          .doc("devHeader")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateHeader({
                    devHeader: data.devHeader,
                  })
                );
                console.log("dev header data", data);
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

    const getDevIntro = async () => {
      try {
        db.collection("development")
          .doc("devHeaderIntro")
          .collection("info")
          .doc("devIntro")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateIntro({
                    devIntro: data.devIntro,
                  })
                );
                console.log("dev intro data", data);
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

    const getDevQuote = async () => {
      try {
        db.collection("development")
          .doc("devCurveQuote")
          .collection("info")
          .doc("devQuote")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateQuote({
                    devQuote: data.devQuote,
                  })
                );
                console.log("dev quote data", data);
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

    const getDevQuoteImage = async () => {
      try {
        db.collection("development")
          .doc("devCurveQuote")
          .collection("info")
          .doc("devQuoteBackgroundImage")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateQuoteImage({
                    devQuoteImage: data.devQuoteImage,
                  })
                );
                console.log("dev quote bg data", data);
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

    const getDevQuotee = async () => {
      try {
        db.collection("development")
          .doc("devCurveQuote")
          .collection("info")
          .doc("devQuotee")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateQuotee({
                    devQuotee: data.devQuotee,
                  })
                );
                console.log("dev quotee data", data);
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

    const getDevSectionOneHeader = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionOne")
          .doc("header")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionOneHeader({
                  devSectionOneHeader: data.sectionOneHeader,
                })
              );
              console.log("section one data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionOneIntro = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionOne")
          .doc("intro")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionOneIntro({
                  devSectionOneIntro: data.sectionOneIntro,
                })
              );
              console.log("section one intro data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionOneImage = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionOne")
          .doc("image")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionOneImage({
                  devSectionOneImage: data.sectionOneImage,
                })
              );
              console.log("section one image data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionTwoHeader = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionTwo")
          .doc("header")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionTwoHeader({
                  devSectionTwoHeader: data.sectionTwoHeader,
                })
              );
              console.log("section two header data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionTwoIntro = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionTwo")
          .doc("intro")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionTwoIntro({
                  devSectionTwoIntro: data.sectionTwoIntro,
                })
              );
              console.log("section two intro data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionTwoImage = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionTwo")
          .doc("image")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionTwoImage({
                  devSectionTwoImage: data.sectionTwoImage,
                })
              );
              console.log("section two image data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionThreeHeader = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionThree")
          .doc("header")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionThreeHeader({
                  devSectionThreeHeader: data.sectionThreeHeader,
                })
              );
              console.log("section three header data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionThreeIntro = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionThree")
          .doc("intro")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionThreeIntro({
                  devSectionThreeIntro: data.sectionThreeIntro,
                })
              );
              console.log("section three intro data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionThreImage = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionThree")
          .doc("image")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionThreeImage({
                  devSectionThreeImage: data.sectionThreeImage,
                })
              );
              console.log("section two image data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionFourHeader = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionFour")
          .doc("header")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionFourHeader({
                  devSectionFourHeader: data.sectionFourHeader,
                })
              );
              console.log("section four header data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionFourIntro = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionFour")
          .doc("intro")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionFourIntro({
                  devSectionFourIntro: data.sectionFourIntro,
                })
              );
              console.log("section four intro data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    const getDevSectionFourImage = async () => {
      try {
        db.collection("development")
          .doc("devSections")
          .collection("sectionFour")
          .doc("image")
          .onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              dispatch(
                updateSectionFourImage({
                  devSectionFourImage: data.sectionFourImage,
                })
              );
              console.log("section four image data", data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    getDevHeader();
    getDevIntro();
    getDevQuote();
    getDevQuoteImage();
    getDevQuotee();
    getDevSectionOneHeader();
    getDevSectionOneIntro();
    getDevSectionOneImage();
    getDevSectionTwoHeader();
    getDevSectionTwoIntro();
    getDevSectionTwoImage();
    getDevSectionThreeHeader();
    getDevSectionThreeIntro();
    getDevSectionThreImage();
    getDevSectionFourHeader();
    getDevSectionFourIntro();
    getDevSectionFourImage();
  }, [dispatch]);

  return <></>;
};

export default DevelopmentActions;
