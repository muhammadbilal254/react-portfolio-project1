import React from "react";
import "./style.scss";
import CallToAction from "../../shared/CallToAction";

import logo from "../../../images/logo.png";

const Navbar = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <span className="navigation-item">Skills</span>
        <span className="navigation-item">Portfolio</span>
        <span className="navigation-item">Blogs</span>
        <CallToAction text="Contact Us" />
      </div>
    </div>
  );
};

export default Navbar;
