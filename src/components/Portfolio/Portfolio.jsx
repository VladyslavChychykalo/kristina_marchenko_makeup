import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ButtonUp from "../ButtonUp/ButtonUp";
import PhotoCard from "./PhotoCard/PhotoCard";
import gallery from "./gallery/gallery";
import { portfolioWrapper } from "./Portfolio.module.css";
import fadeButtonUpTransition from "../../stylesheet/transitions/fadeButtonUp.module.css";

class Portfolio extends Component {
  state = { isAppear: false };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 1500) {
      this.setState({ isAppear: true });
    } else {
      this.setState({ isAppear: false });
    }
  };

  scrollOnTop = () => {
    window.scrollTo({
      top: document.documentElement.clientTop,
      behavior: "smooth"
    });
  };

  render() {
    const { isAppear } = this.state;
    return (
      <>
        <ul className={portfolioWrapper}>
          {gallery.map(el => (
            <li key={el}>
              <PhotoCard key={el} link={el} />
            </li>
          ))}
        </ul>
        <CSSTransition
          in={isAppear}
          timeout={1000}
          classNames={fadeButtonUpTransition}
          unmountOnExit
        >
          <ButtonUp onTop={this.scrollOnTop} />
        </CSSTransition>
      </>
    );
  }
}

export default Portfolio;
