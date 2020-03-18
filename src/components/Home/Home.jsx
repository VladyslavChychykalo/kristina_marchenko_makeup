import React, { Component } from "react";
import { backGround, imageCard, homeWrapper } from "./Home.module.css";
import gallery from "./gallery/gallery";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slideRandomTransaction from "../../stylesheet/transitions/slideRandomImage.module.css";

export default class Home extends Component {
  state = { index: -1, didMount: true };

  componentDidMount() {
    this.nextImage();
    this.interval = setInterval(this.nextImage, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    const { index } = this.state;

    if (gallery.length - 1 === index) {
      this.setState({
        index: -1
      });
    }

    this.setState(state => ({
      index: state.index + 1
    }));
  };

  render() {
    const { index } = this.state;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    return (
      <>
        <div className={backGround}></div>
        <TransitionGroup className={homeWrapper}>
          <CSSTransition
            key={gallery[index]}
            timeout={2000}
            classNames={slideRandomTransaction}
            unmountOnExit
          >
            <div className={imageCard}>
              <img src={gallery[index]} alt="" />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}
