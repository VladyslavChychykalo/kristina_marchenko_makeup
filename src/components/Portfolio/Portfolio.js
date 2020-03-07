import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ButtonUp from "../ButtonUp/ButtonUp";
import gallery from "./gallery/gallery";
import { portfolioWrapper } from "./Portfolio.module.css";
import fadeButtonUpTransition from "../../stylesheet/transitions/fadeButtonUp.module.css";

export default class Portfolio extends Component {
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

  render() {
    const { isAppear } = this.state;
    return (
      <>
        <ul className={portfolioWrapper}>
          {gallery.map(el => (
            <li>
              <img src={el} alt="image_makeup" />
            </li>
          ))}
        </ul>
        <CSSTransition
          in={isAppear}
          timeout={1000}
          classNames={fadeButtonUpTransition}
          unmountOnExit
        >
          <ButtonUp />
        </CSSTransition>
      </>
    );
  }
}
