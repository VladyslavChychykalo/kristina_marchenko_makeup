import React from "react";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import ToggleMenu from "./ToggleMenu/ToggleMenu";

const Menu = ({ onToggle }) => {
  const windowWidth = document.documentElement.clientWidth;

  if (windowWidth >= 1200) {
    return <DesktopMenu />;
  }

  return <ToggleMenu onToggle={onToggle} />;
};

export default Menu;
