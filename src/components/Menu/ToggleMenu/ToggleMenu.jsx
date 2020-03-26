import React from "react";
import { buttonToggle, logoImg } from "./ToggleMenu.module.css";
import logo from "../../../assets/images/logo.gif";

const ToggleMenu = ({ onToggle }) => (
  <div className={buttonToggle}>
    <button onClick={onToggle}>Меню</button>
    <img className={logoImg} src={logo} alt="" />
  </div>
);

export default ToggleMenu;
