import React from "react";
import "./style.scss";

import Section from "../shared/section/index";
import CallToAction from "../shared/CallToAction/";
import Techicon from "../../images/tech-icons.png";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skill = () => {
  return (
    <Section background={"dark"} id={"skill"}>
      <div className="skill-content-wrapper">
        <div className="left-col">
          <img src={Techicon} alt="tools" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            nisi debitis quo, quia suscipit quidem? Incidunt ad possimus aperiam
            fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, nihil. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit amet earum dolorum ullam voluptate voluptas
            reprehenderit eligendi, soluta accusamus in atque. Illo in
            accusantium, sunt minus maxime dicta fugit nesciunt?
          </p>
          <CallToAction
            text={"Download CV"}
            icon={<AiOutlineCloudDownload />}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skill;
