import React from "react";
import "./style.scss";

import Section from "../shared/section/";
import BlogCard from "./blog-card";

import blog1 from "../../images/blogs/blog-thumb-1.jpg";
import blog2 from "../../images/blogs/blog-thumb-2.jpg";
import blog3 from "../../images/blogs/blog-thumb-3.jpg";

const Blogs = () => {
  return (
    <Section id={"blogs"} title={"Blogs & Articles"} background={"dark"}>
      <div className="blog-content-wrapper">
        <BlogCard
          user="John Doe"
          date={"Mar 8 2023"}
          title={"ReactJs Context-Hooks Tutorial"}
          image={blog1}
          description={`   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officia
          sapiente. Perferendis saepe dolorem maiores at fugiat earum doloribus
          dolor magni sapiente optio facilis, possimus minima qui tempora beatae
          modi itaque quasi! Voluptate officia inventore explicabo, cumque
          veritatis optio sint?`}
        />
        <BlogCard
          user="John Doe"
          date={"Mar 8 2023"}
          title={"SEO V/S SEM "}
          image={blog3}
          description={`   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officia
          sapiente. Perferendis saepe dolorem maiores at fugiat earum doloribus
          dolor magni sapiente optio facilis, possimus minima qui tempora beatae
          modi itaque quasi! Voluptate officia inventore explicabo, cumque
          veritatis optio sint?`}
        />
        <BlogCard
          user="John Doe"
          date={"Mar 8 2023"}
          title={"Interactive UI Complete Guide"}
          image={blog2}
          description={`   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officia
          sapiente. Perferendis saepe dolorem maiores at fugiat earum doloribus
          dolor magni sapiente optio facilis, possimus minima qui tempora beatae
          modi itaque quasi! Voluptate officia inventore explicabo, cumque
          veritatis optio sint?`}
        />
      </div>
    </Section>
  );
};

export default Blogs;
