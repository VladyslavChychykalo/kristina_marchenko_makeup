import React from "react";
import {
  buttonToggle
  // logoImg
} from "./ToggleMenu.module.css";
import Logo from "../../Logo/Logo";
// import logo from "../../../assets/images/logo.gif";

const ToggleMenu = ({ onToggle }) => (
  <div className={buttonToggle}>
    <button onClick={onToggle}>Меню</button>
    {/* <img className={logoImg} src={logo} alt="" /> */}
    <Logo />
  </div>
);

export default ToggleMenu;
