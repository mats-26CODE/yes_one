import React from "react";
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
