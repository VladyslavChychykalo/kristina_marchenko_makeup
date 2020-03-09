import React, { Component } from "react";
import ModalForPhoto from "../../ModalForPhoto/ModalForPhoto";

export default class PhotoCard extends Component {
  state = { isOpen: false };

  toggleModal = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { link } = this.props;
    return (
      <>
        <img onClick={this.toggleModal} src={link} alt="image_makeup" />
        {isOpen && (
          <ModalForPhoto linkLarge={link} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
