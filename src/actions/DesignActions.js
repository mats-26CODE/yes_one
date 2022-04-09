import React, { useEffect } from "react";
import db from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateDesignHeader,
  updateDesignIntro,
  updateDesignPrincipleImage,
  updateDesignPrinciples,
  updateDesignProducts,
  updateDesignProductsHeader,
  updateDesignWorkImages,
} from "../features/designSlice";

const DesignActions = () => {
  //-> redux dispatch
  const dispatch = useDispatch();

  //-> get development page data from the database
  useEffect(() => {
    //-> Get the design header
    const getDesHeader = async () => {
      try {
        db.collection("design")
          .doc("designHeaderIntro")
          .collection("info")
          .doc("designHeader")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateDesignHeader({
                    designHeader: data.designHeader,
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

    //-> Get the design intro
    const getDesIntro = async () => {
      try {
        db.collection("design")
          .doc("designHeaderIntro")
          .collection("info")
          .doc("designIntro")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateDesignIntro({
                    designIntro: data.designIntro,
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

    //-> Get the design principle image
    const getDesPrincipleImage = async () => {
      try {
        db.collection("design")
          .doc("designGeeks")
          .collection("illustration")
          .doc("image")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateDesignPrincipleImage({
                    designPrincipleImage: data.designGeekImage,
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

    //-> Get the design principles
    const getDesignPrinciples = async () => {
      try {
        db.collection("design")
          .doc("designGeeks")
          .collection("cards")
          .onSnapshot((snapshot) => {
            // setProducts(snapshot.docs.map((doc) => doc.data()));
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(
              updateDesignPrinciples({
                designPrinciples: data,
              })
            );
          });
      } catch (err) {
        console.error(err);
      }
    };

    //-> Get the design products header
    const getDesProductsHeader = async () => {
      try {
        db.collection("design")
          .doc("designProducts")
          .collection("designProductsDetails")
          .doc("info")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateDesignProductsHeader({
                    designProductsHeader: data.designProducts,
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

    //-> Get the design products
    const getDesignProducts = async () => {
      try {
        db.collection("design")
          .doc("designProductCircle")
          .collection("cards")
          .onSnapshot((snapshot) => {
            // setProducts(snapshot.docs.map((doc) => doc.data()));
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(
              updateDesignProducts({
                designProducts: data,
              })
            );
          });
      } catch (err) {
        console.error(err);
      }
    };

    //-> Get the design work images
    const getDesignWorkImages = async () => {
      try {
        db.collection("design")
          .doc("designs")
          .collection("images")
          .onSnapshot((snapshot) => {
            // setProducts(snapshot.docs.map((doc) => doc.data()));
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(
              updateDesignWorkImages({
                designWorkImages: data,
              })
            );
          });
      } catch (err) {
        console.error(err);
      }
    };

    getDesHeader();
    getDesIntro();
    getDesPrincipleImage();
    getDesignPrinciples();
    getDesProductsHeader();
    getDesignProducts();
    getDesignWorkImages();
  }, [dispatch]);

  return <></>;
};

export default DesignActions;
