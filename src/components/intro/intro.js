import React from "react";
import "./style.scss";
import Navbar from "./navigation-bar/navbar";
import IntroContent from "./intro-content";

import cloud from "../../images/cloud.png";
import cloudsoft from "../../images/cloud-soft.png";

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="vector-bg" id="parallex"></div>
      <img className="cloud" src={cloud} alt="background img" />
      <img className="cloud-soft" src={cloudsoft} alt="background img" />
      <div className="content">
        <Navbar />
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
