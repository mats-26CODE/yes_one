import React, { useEffect } from "react";
import db from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateHeader,
  updateIntro,
  updateQuote,
  updateQuotee,
  updateQuoteImage,
  updateSectionFourHeader,
  updateSectionFourImage,
  updateSectionFourIntro,
  updateSectionOneHeader,
  updateSectionOneImage,
  updateSectionOneIntro,
  updateSectionThreeHeader,
  updateSectionThreeImage,
  updateSectionThreeIntro,
  updateSectionTwoHeader,
  updateSectionTwoImage,
  updateSectionTwoIntro,
} from "../features/developmentSlice";

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
