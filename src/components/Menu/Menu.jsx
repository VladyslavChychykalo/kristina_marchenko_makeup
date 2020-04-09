import React from "react";
import Media from "react-media";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import ToggleMenu from "./ToggleMenu/ToggleMenu";

const Menu = ({ onToggle }) => {
  return (
    <div>
      <Media queries={{ small: { minWidth: 1199 } }}>
        {(matches) =>
          matches.small ? <DesktopMenu /> : <ToggleMenu onToggle={onToggle} />
        }
      </Media>
    </div>
  );
  // const windowWidth = document.documentElement.clientWidth;

  // if (windowWidth >= 1200) {
  //   return <DesktopMenu />;
  // }

  // return <ToggleMenu onToggle={onToggle} />;
};

export default Menu;
