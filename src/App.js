import React from "react";
import Intro from "./components/intro/intro";
import Skill from "./components/skill";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Intro />
      <Skill />
    </div>
  );
};

export default App;
