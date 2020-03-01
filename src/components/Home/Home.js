import React from "react";
import { homeWrapper } from "./Home.module.css";
import gallery from "./gallery/gallery";

const Home = () => (
  <ul className={homeWrapper}>
    {gallery.map(el => (
      <li>
        <img src={el} alt="image_makeup" />
      </li>
    ))}
  </ul>
);

export default Home;
