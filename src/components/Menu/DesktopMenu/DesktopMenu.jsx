import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.gif";
import {
  destopHeaderWrapper,
  desktopLogoImg,
  desktopNavList,
  desktopNavItem,
  link,
  socialLink,
  socialLinkWrapper
} from "./DesktopMenu.module.css";
import { ReactComponent as Instagram } from "../../../assets/svg/instagramIcon.svg";
import { ReactComponent as Facebook } from "../../../assets/svg/facebookIcon.svg";

const navLinks = [
  { id: 1, tytle: "Главная", path: "/home" },
  { id: 2, tytle: "Портфолио", path: "/portfolio" },
  { id: 3, tytle: "Услуги", path: "/services" },
  { id: 4, tytle: "Обучение", path: "/education" },
  { id: 5, tytle: "Контакты", path: "/contacts" }
];

const DesktopMenu = () => (
  <div className={destopHeaderWrapper}>
    <img className={desktopLogoImg} src={logo} alt="" />
    <ul className={desktopNavList}>
      {navLinks.map(({ id, tytle, path }) => (
        <li key={id}>
          <Link className={desktopNavItem} to={path}>
            {tytle}
          </Link>
        </li>
      ))}
    </ul>
    <div className={socialLinkWrapper}>
      <a className={link} href="https://www.instagram.com/kristina_makeups/">
        <Instagram className={socialLink} />
      </a>
      <a className={link} href="https://www.facebook.com/sizenka">
        <Facebook className={socialLink} />
      </a>
    </div>
  </div>
);

export default DesktopMenu;
