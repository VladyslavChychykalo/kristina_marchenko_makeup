import React, { Component } from "react";
import { homeWrapper } from "./Home.module.css";
import gallery from "./gallery/gallery";

export default class Home extends Component {
  state = {
    image: ""
  };

  componentDidMount() {
    this.updateImage();
    this.interval = setInterval(this.updateImage, 3000);
    console.log(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomImage = image => {
    this.setState({
      image: image
    });
  };

  updateImage = () => {
    const randomImg = gallery[Math.floor(Math.random() * gallery.length)];
    this.randomImage(randomImg);
  };

  render() {
    const { image } = this.state;
    console.log(this.state);
    console.log(image);
    return (
      // <ul className={homeWrapper}>
      //   {gallery.map(el => (
      //     <li>
      //       <img src={el} alt="image_makeup" />
      //     </li>
      //   ))}
      // </ul>
      <div className={homeWrapper}>
        <img src={image} alt="random_image" />
      </div>
    );
  }
}
