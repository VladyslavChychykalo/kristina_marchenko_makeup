import React from "react";
import gallery from "./gallery/gallery";
import { portfolioWrapper } from "./Portfolio.module.css";

const Portfolio = () => (
  <ul className={portfolioWrapper}>
    {gallery.map(el => (
      <li>
        <img src={el} alt="image_makeup" />
      </li>
    ))}
  </ul>
);

export default Portfolio;
