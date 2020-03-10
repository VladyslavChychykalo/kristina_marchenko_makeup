import React, { Component } from "react";
import ModalForPhoto from "../../ModalForPhoto/ModalForPhoto";
import { imageCard } from "./PhotoCard.module.css";
import gallery from "../../Portfolio/gallery/gallery";

export default class PhotoCard extends Component {
  state = { isOpen: false, index: 0 };

  toggleModal = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
      index: this.takeValue()
    }));
  };

  handleChangeValue = target => {
    const { index } = this.state;
    console.log(target.name);
    console.log(index);
    this.setState({
      index: target.name === "right" ? index + 1 : index - 1
    });
  };

  takeValue = () => {
    const { link } = this.props;
    const value = gallery.filter(el => link === el);
    const indexOfItem = gallery.indexOf(value[0]);
    return indexOfItem;
  };

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
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}
