import React from "react";
import Section from "../shared/section";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper";

import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

import "./style.scss";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <Section background={"dark"} className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="footer-menu">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skill")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("blogs")}
          >
            Blogs
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contatct
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#FF0000"
            icon={<FaYoutube />}
            link={"https://www.youtube.com/"}
          />
          <SocialIcon
            color={"#0d2636"}
            icon={<FaGithub />}
            link={"https://www.github.com/"}
          />
          <SocialIcon
            color={"#f2740d"}
            icon={<FaStackOverflow />}
            link={"https://www.github.com/"}
          />
          <SocialIcon
            color="#E84C88"
            icon={<FaInstagram />}
            link={"https://www.github.com/"}
          />
          <SocialIcon
            color="#E84C88"
            icon={<FaLinkedin />}
            link={"https://www.github.com/"}
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright 2023 CoderSmash | All Right Reserved
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
