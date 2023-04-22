import React from "react";
import "./style.scss";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helper";

import logo from "../../../images/logo.png";

const Navbar = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <span
          className="navigation-item"
          onClick={() => scrollToSection("skill")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => scrollToSection("portfolio")}
        >
          Portfolio
        </span>
        <span
          className="navigation-item"
          onClick={() => scrollToSection("blogs")}
        >
          Blogs
        </span>
        <CallToAction
          text="Contact Us"
          action={() => scrollToSection("contact")}
        />
      </div>
    </div>
  );
};

export default Navbar;
