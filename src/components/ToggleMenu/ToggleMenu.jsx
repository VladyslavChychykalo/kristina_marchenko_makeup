import React from "react";
import {
  buttonToggle,
  desktopNavList,
  desktopNavItem,
  logoImg
} from "./ToggleMenu.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.gif";

const navLinks = [
  { id: 1, tytle: "Главная", path: "/home" },
  { id: 2, tytle: "Портфолио", path: "/portfolio" },
  { id: 3, tytle: "Услуги", path: "/services" },
  { id: 4, tytle: "Обучение", path: "/education" },
  { id: 5, tytle: "Контакты", path: "/contacts" }
];

const ToggleMenu = ({ onToggle }) => {
  const windowWidth = document.documentElement.clientWidth;

  if (windowWidth >= 1200) {
    return (
      <div>
        <img className={logoImg} src={logo} alt="" />
        <ul className={desktopNavList}>
          {navLinks.map(({ id, tytle, path }) => (
            <li key={id}>
              <Link className={desktopNavItem} to={path}>
                {tytle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={buttonToggle}>
      <button onClick={onToggle}>Меню</button>
      <img className={logoImg} src={logo} alt="" />
    </div>
  );
};

export default ToggleMenu;
