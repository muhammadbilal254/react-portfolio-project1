import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section/index";
import Filter from "./filters/filter";
import Showcase from "./showcase/showcase";

const projectsData = [
  {
    id: 1,
    name: "Healthy Food Resturent",
    tags: ["web-apps", "mobile-apps"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-7.jpg"),
    },
  },
  {
    id: 2,
    name: "Anna & Daniel",
    tags: ["web-pages"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.jpg"),
    },
  },
  {
    id: 3,
    name: "Web Design Landing Page",
    tags: ["web-pages"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-8.jpg"),
    },
  },
  {
    id: 4,
    name: "Business Analytics web Apps",
    tags: ["web-apps", "mobile-apps"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-1.jpg"),
    },
  },
  {
    id: 5,
    name: "Healthy Food Resturent",
    tags: ["web-apps", "mobile-apps"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-6.jpg"),
    },
  },
  {
    id: 6,
    name: "Anna & Daniel",
    tags: ["web-pages"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-5.jpg"),
    },
  },
  {
    id: 7,
    name: "Web Design Landing Page",
    tags: ["web-pages"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-3.jpg"),
    },
  },
  {
    id: 8,
    name: "Business Analytics web Apps",
    tags: ["web-apps", "mobile-apps"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-4.jpg"),
    },
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout");

    setTimeout(() => {
      if (tag !== "all") {
        const filteredData = projectsData.filter((f) => f.tags.includes(tag));
        setProjects(filteredData);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin");
    }, 200);
    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <Section id={"portflio"} title={"Check My Portfolio"} background={"light"}>
      <div className="portfolio-content-wrapper">
        <Filter filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Portfolio;
