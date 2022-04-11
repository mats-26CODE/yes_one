import React, { useEffect } from "react";
import db from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateTeamHeader,
  updateTeamIntro,
  updateTeamBrains,
  updateClients,
  updateClientTreat,
  updateTeamTraits,
} from "../features/teamSlice";

const TeamActions = () => {
  //-> redux dispatch
  const dispatch = useDispatch();

  //-> get team's data from database
  useEffect(() => {
    //-> Get the team page header
    const getTeamHeader = async () => {
      try {
        db.collection("team")
          .doc("teamHeaderIntro")
          .collection("info")
          .doc("teamHeader")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateTeamHeader({
                    teamHeader: data.teamHeader,
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

    //-> Get the team intro
    const getTeamIntro = async () => {
      try {
        db.collection("team")
          .doc("teamHeaderIntro")
          .collection("info")
          .doc("teamIntro")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateTeamIntro({
                    teamIntro: data.teamIntro,
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

    //-> Get the team brains
    const getTeamBrains = async () => {
      try {
        db.collection("team")
          .doc("teamBrains")
          .collection("all")
          .onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(
              updateTeamBrains({
                teamBrains: data,
              })
            );
          });
      } catch (err) {
        console.error(err);
      }
    };

    //-> Get the team traits
    const getTeamTraits = async () => {
      try {
        db.collection("team")
          .doc("teamTraits")
          .collection("all")
          .onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(
              updateTeamTraits({
                teamTraits: data,
              })
            );
          });
      } catch (err) {
        console.error(err);
      }
    };

    //-> Get the clients
    const getClients = async () => {
      try {
        db.collection("team")
          .doc("clients")
          .collection("all")
          .onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(
              updateClients({
                clients: data,
              })
            );
          });
      } catch (err) {
        console.error(err);
      }
    };

    //-> Get the team intro
    const getClientTreat = async () => {
      try {
        db.collection("team")
          .doc("clients")
          .collection("clientsTreat")
          .doc("info")
          .onSnapshot(
            function (doc) {
              //-> check if the doc is available
              if (doc.exists) {
                const data = doc.data();
                dispatch(
                  updateClientTreat({
                    clientTreat: data.clientTreat,
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

    getTeamHeader();
    getTeamIntro();
    getTeamBrains();
    getTeamTraits();
    getClients();
    getClientTreat();
  }, [dispatch]);

  return <></>;
};

export default TeamActions;
