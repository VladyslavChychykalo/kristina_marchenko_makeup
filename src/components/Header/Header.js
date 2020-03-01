import React from "react";
import { Link } from "react-router-dom";
import { navWrapper, nav } from "./Header.module.css";

const navLinks = [
  { id: 1, tytle: "Главная", path: "/home" },
  // { id: 2, tytle: "Портфолио", path: "/portfolio" },
  { id: 3, tytle: "Услуги", path: "/services" },
  { id: 4, tytle: "Обучение", path: "/education" },
  { id: 5, tytle: "Контакты", path: "/contacts" }
];

const Header = ({ onToggle }) => (
  <ul className={navWrapper}>
    {navLinks.map(({ id, tytle, path }) => (
      <li key={id} onClick={onToggle}>
        <Link className={nav} to={path}>
          {tytle}
        </Link>
      </li>
    ))}
  </ul>
);

export default Header;
