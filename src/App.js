import React from "react";
import "./app.scss";

// import Components
import Intro from "./components/intro/intro";
import Skill from "./components/skill";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs/";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Intro />
      <Skill />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
