import React from "react";
import DesignActions from "./actions/DesignActions";
import DevelopmentActions from "./actions/DevelopmentActions";
import HomeActions from "./actions/HomeActions";
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
