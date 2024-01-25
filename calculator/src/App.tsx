import React from "react";
import "./App.css";
import Routing from "./pages/Routing";
import Background from "./assets/background.jpg"

function App() {
  return (
      <div className="app-container">
        <img className="background-image" src={Background} alt="Background Image" />
        <Routing />
      </div>
  );
}

export default App;
