import React from "react";
import { buttonUpWrapper } from "./ButtonUp.module.css";

const ButtonUp = ({ onTop }) => (
  <div onClick={onTop} className={buttonUpWrapper}>
    <p>&#8679;</p>
  </div>
);

export default ButtonUp;
