import React from "react";
import "./app.scss";

// import Components
import Intro from "./components/intro/intro";
import Skill from "./components/skill";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs/";
import Contact from "./components/contact";

const App = () => {
  return (
    <div>
      <Intro />
      <Skill />
      <Portfolio />
      <Blogs />
      <Contact />
    </div>
  );
};

export default App;
