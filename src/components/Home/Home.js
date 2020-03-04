// import React, { Component } from "react";
// import { homeWrapper } from "./Home.module.css";
// import gallery from "./gallery/gallery";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import slideRandomTransaction from "../../stylesheet/transitions/slideRandomImage.module.css";

// export default class Home extends Component {
//   state = {
//     image: "",
//     didMount: false
//   };

//   componentDidMount() {
//     this.updateImage();
//     this.interval = setInterval(this.updateImage, 5000);
//     console.log(this.interval);
//     console.log("cdm");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.didMount === prevState.didMount) {
//       this.setState(state => ({
//         didMount: !state.didMount
//       }));

//       return;
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   randomImage = image => {
//     this.setState({
//       image: image
//     });
//   };

//   updateImage = () => {
//     const randomImg = gallery[Math.floor(Math.random() * gallery.length)];
//     console.log(gallery[0]);
//     this.randomImage(randomImg);
//   };

//   render() {
//     const { image, didMount } = this.state;
//     console.log(this.state);
//     console.log(image);
//     return (
//       <CSSTransition
//         // in={didMount}
//         timeout={2500}
//         classNames={slideRandomTransaction}
//       >
//         <div className={homeWrapper}>
//           <img src={image} alt="random_image" />
//         </div>
//       </CSSTransition>
//     );
//   }
// }

import React, { Component } from "react";
import { imageCard, homeWrapper } from "./Home.module.css";
import gallery from "./gallery/gallery";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slideRandomTransaction from "../../stylesheet/transitions/slideRandomImage.module.css";

export default class Home extends Component {
  state = { index: -1, didMount: true };

  componentDidMount() {
    this.nextImage();
    this.interval = setInterval(this.nextImage, 10000);
    console.log(this.interval);
    console.log("cdm");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    console.log("func");
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
    console.log(index);
    return (
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
    );
  }
}
