import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import "./style.scss";
import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import CallToAction from "../../shared/CallToAction";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="Hand Icon" />
              </span>
              <span className="text">, I Am </span>
            </span>
            <span className="big-text">Joseph Asnit</span>
          </h1>
          <p>
            A frontend Web application with more than one year of Expirence. I
            am working with Reactjs, twilwind css and many more tools.
          </p>
          <CallToAction text={"Contact US"} />
        </div>
        <div className="right-col">
          <img src={girl} alt="Girl" />

          <div className="highlights horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Best Design Award</div>
          </div>

          <div className="highlights vertical">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4k+</span>
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
