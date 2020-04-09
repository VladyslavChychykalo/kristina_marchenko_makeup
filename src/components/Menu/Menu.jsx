import React from "react";
import Media from "react-media";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import ToggleMenu from "./ToggleMenu/ToggleMenu";

const Menu = ({ onToggle }) => {
  return (
    <div>
      <Media queries={{ small: { maxWidth: 1199 } }}>
        {(matches) =>
          matches.small ? <ToggleMenu onToggle={onToggle} /> : <DesktopMenu />
        }
      </Media>
    </div>
  );
};

export default Menu;
