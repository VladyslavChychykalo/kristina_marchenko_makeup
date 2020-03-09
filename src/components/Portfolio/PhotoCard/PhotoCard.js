import React, { Component } from "react";
import ModalForPhoto from "../../ModalForPhoto/ModalForPhoto";
import { imageCard } from "./PhotoCard.module.css";
import gallery from "../../Portfolio/gallery/gallery";

export default class PhotoCard extends Component {
  state = { isOpen: false, index: 0 };

  toggleModal = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  handleChangeValue = target => {
    const { index } = this.state;
    this.setState({
      index: target.name === "right" ? index + 1 : index - 1
    });
  };

  saveValue = e => {};

  render() {
    const { isOpen, index } = this.state;
    const { link } = this.props;
    return (
      <>
        <img
          className={imageCard}
          onClick={this.toggleModal}
          src={link}
          alt="image_makeup"
        />
        {isOpen && (
          <ModalForPhoto
            index={index}
            onChangeImage={this.handleChangeValue}
            linkLarge={link}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}
