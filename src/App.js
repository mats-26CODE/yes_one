import React from "react";
import CareerActions from "./actions/CareerActions";
import DesignActions from "./actions/DesignActions";
import DevelopmentActions from "./actions/DevelopmentActions";
import HomeActions from "./actions/HomeActions";
import TeamActions from "./actions/TeamActions";
import "./App.css";

//-> component imports 🚀
import Main from "./components/Main";

function App() {
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
    <div className="App">
      {getComponentsActions()}

      <Main />
    </div>
  );
}

export default App;
