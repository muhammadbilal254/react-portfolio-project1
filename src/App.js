import React from "react";
import "./app.scss";

// import Components
import Intro from "./components/intro/intro";
import Skill from "./components/skill";
import Portfolio from "./components/portfolio";

const App = () => {
  return (
    <div>
      <Intro />
      <Skill />
      <Portfolio />
    </div>
  );
};

export default App;
