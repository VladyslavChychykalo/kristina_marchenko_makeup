import React, { Component } from "react";
import Loadable from "react-loadable";
import Loader from "../Loader/Loader";
import { CSSTransition } from "react-transition-group";
import ButtonUp from "../ButtonUp/ButtonUp";
import gallery from "./gallery/gallery";
import { portfolioBackground, portfolioWrapper } from "./Portfolio.module.css";
import fadeButtonUpTransition from "../../stylesheet/transitions/fadeButtonUp.module.css";

const PhotoCard = Loadable({
  loader: () => import("./PhotoCard/PhotoCard"),
  loading: Loader,
});

class Portfolio extends Component {
  state = { isAppear: false };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent);
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 1500) {
      this.setState({ isAppear: true });
    } else {
      this.setState({ isAppear: false });
    }
  };

  scrollOnTop = () => {
    window.scrollTo({
      top: document.documentElement.clientTop,
      behavior: "smooth",
    });
  };

  render() {
    const { isAppear } = this.state;

    return (
      <>
        <div className={portfolioBackground}></div>
        <ul className={portfolioWrapper}>
          {gallery.map((el) => (
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
