import React, { useState } from "react";
import "./style.scss";

const filterData = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Products",
    id: "products",
  },
  {
    name: "Web Pages",
    id: "web-pages",
  },
  {
    name: "Web Apps",
    id: "web-apps",
  },
  {
    name: "Mobile Apps",
    id: "mobile-apps",
  },
];

const Filter = ({ filterProjects }) => {
  const [active, setActive] = useState("all");

  const ClickHandeler = (id) => {
    setActive(id);
    filterProjects(id);
  };

  return (
    <ul className="filter-menu">
      {filterData.map((items) => (
        <li
          key={items.id}
          className={`filter-menu-item ${active === items.id ? "active" : ""}`}
          onClick={() => ClickHandeler(items.id)}
        >
          {items.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
