import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  backGround,
  imageCard,
  homeWrapper,
  homeSliderImage,
} from "./Home.module.css";
import gallery from "./gallery/gallery";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slideRandomTransaction from "../../stylesheet/transitions/slideRandomImage.module.css";

export default class Home extends Component {
  state = { index: -1 };

  componentDidMount() {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= 1200) {
      return;
    }

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
        index: -1,
      });
    }

    this.setState((state) => ({
      index: state.index + 1,
    }));
  };

  homeImageScreen = (index) => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= 1200) {
      return gallery[0];
    }

    return gallery[index];
  };

  render() {
    const { index } = this.state;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    return (
      <div>
        <Helmet>
          <title>Главная</title>
          <link
            rel="canonical"
            href="http://www.makeupschoolmarchenko.com.ua/#/home"
          />
          <meta
            name="description"
            content="ОБУЧЕНИЕ ВИЗАЖИСТОВ: БАЗОВЫЙ КУРС, ПОВЫШЕНИЕ КВАЛИФИКАЦИИ
      КУРС «МАКИЯЖ ДЛЯ СЕБЯ»
      КУРС ПО ПРИЧЕСКАМ"
          />
        </Helmet>

        <div className={backGround}></div>
        <TransitionGroup className={homeWrapper}>
          <CSSTransition
            key={gallery[index]}
            timeout={2000}
            classNames={slideRandomTransaction}
            unmountOnExit
          >
            <div className={imageCard}>
              <div
                className={homeSliderImage}
                style={{
                  backgroundImage: `url(${this.homeImageScreen(index)})`,
                }}
              ></div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
