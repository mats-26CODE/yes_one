import React from "react";
import "./ResponsiveApp.css";
import "./App.css";
import CareerActions from "./actions/CareerActions";
import DesignActions from "./actions/DesignActions";
import DevelopmentActions from "./actions/DevelopmentActions";
import HomeActions from "./actions/HomeActions";
import TeamActions from "./actions/TeamActions";

//-> component imports 🚀
import Main from "./components/Main";

const App = () => {
  const getComponentsActions = () => {
    return (
      <>
        <HomeActions />
        <DevelopmentActions />
        <DesignActions />
        <TeamActions />
        <CareerActions />
      </>
    );
  };

  return (
    <div className="app">
      {getComponentsActions()}

      <Main />
    </div>
  );
};

export default App;
