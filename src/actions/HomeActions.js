import React, { useEffect } from "react";
import db from '../firebase';
import { useDispatch } from "react-redux";
import {
  header,
  products,
  secOneHeader,
  secOneIntro,
  secOneImage,
  secTwoHeader,
  secTwoIntro,
  secTwoImage,
} from "../features/home/homeSlice";

const HomeActions = () => {
  //-> redux dispatch
  const dispatch = useDispatch();

  //-> home fetching actions
  useEffect(() => {
    //-> Get home header from firestore database
    const fetchHomeHeader = async () => {
      try {
        db.collection("home")
          .doc("homeIntro")
          .collection("homeHeader")
          .doc("info")
          .onSnapshot(
            function (doc) {
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
              console.log("Getting trouble fetching data");
              console.log(error);
            }
          );
      } catch (err) {
        console.error(err);
      }
    };
    fetchHomeHeader();
  }, [dispatch]);

  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        db.collection("home")
          .doc("homeIntro")
          .collection("homeProducts")
          .onSnapshot((snapshot) => {
            // setProducts(snapshot.docs.map((doc) => doc.data()));
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(
              products({
                products: data,
              })
            );
            console.log("data products", data);
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetchHomeProducts();
  }, [dispatch]);

  useEffect(() => {
    //-> fetch sectionOne
    const fetchSectionOneHeader = async () => {
      try {
        db.collection("home")
          .doc("homeSections")
          .collection("sectionOne")
          .doc("header")
          .onSnapshot(
            function (doc) {
              //check if doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  secOneHeader({
                    sectionOneHeader: data.sectionOneHeader,
                  })
                );
              }
            },
            function (error) {
              console.log("Getting trouble fetching data");
              console.log(error);
            }
          );
      } catch (err) {
        console.error(err);
      }
    };
    const fetchSectionOneIntro = async () => {
      try {
        db.collection("home")
          .doc("homeSections")
          .collection("sectionOne")
          .doc("intro")
          .onSnapshot(
            function (doc) {
              //check if doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  secOneIntro({
                    sectionOneIntro: data.sectionOneIntro,
                  })
                );
              }
            },
            function (error) {
              console.log("Getting trouble fetching data");
              console.log(error);
            }
          );
      } catch (err) {
        console.error(err);
      }
    };
    const fetchSectionOneImage = async () => {
      try {
        db.collection("home")
          .doc("homeSections")
          .collection("sectionOne")
          .doc("image")
          .onSnapshot(
            function (doc) {
              //check if doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  secOneImage({
                    sectionOneImage: data.sectionOneImage,
                  })
                );
              }
            },
            function (error) {
              console.log("Getting trouble fetching data");
              console.log(error);
            }
          );
      } catch (err) {
        console.error(err);
      }
    };

    //-> fetch sectionTwo
    const fetchSectionTwoHeader = async () => {
      try {
        db.collection("home")
          .doc("homeSections")
          .collection("sectionTwo")
          .doc("header")
          .onSnapshot(
            function (doc) {
              //check if doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  secTwoHeader({
                    sectionTwoHeader: data.sectionTwoHeader,
                  })
                );
              }
            },
            function (error) {
              console.log("Getting trouble fetching data");
              console.log(error);
            }
          );
      } catch (err) {
        console.error(err);
      }
    };
    const fetchSectionTwoIntro = async () => {
      try {
        db.collection("home")
          .doc("homeSections")
          .collection("sectionTwo")
          .doc("intro")
          .onSnapshot(
            function (doc) {
              //check if doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  secTwoIntro({
                    sectionTwoIntro: data.sectionTwoIntro,
                  })
                );
              }
            },
            function (error) {
              console.log("Getting trouble fetching data");
              console.log(error);
            }
          );
      } catch (err) {
        console.error(err);
      }
    };
    const fetchSectionTwoImage = async () => {
      try {
        db.collection("home")
          .doc("homeSections")
          .collection("sectionTwo")
          .doc("image")
          .onSnapshot(
            function (doc) {
              //check if doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  secTwoImage({
                    sectionTwoImage: data.sectionTwoImage,
                  })
                );
              }
            },
            function (error) {
              console.log("Getting trouble fetching data");
              console.log(error);
            }
          );
      } catch (err) {
        console.error(err);
      }
    };
    fetchSectionOneHeader();
    fetchSectionOneIntro();
    fetchSectionOneImage();
    fetchSectionTwoHeader();
    fetchSectionTwoIntro();
    fetchSectionTwoImage();
  }, [dispatch]);

  return <div></div>;
}

export default HomeActions;