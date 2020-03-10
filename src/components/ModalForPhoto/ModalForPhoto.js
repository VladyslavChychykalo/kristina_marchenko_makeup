import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./ModalForPhoto.module.css";
import gallery from "../Portfolio/gallery/gallery";

class Modal extends Component {
  backdropRef = createRef();

  static propTypes = {
    onClose: PropTypes.func.isRequired
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== `Escape`) return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) return;

    this.props.onClose();
  };

  handleTakeValue = target => {
    this.props.onChangeImage(target);
  };

  render() {
    const { index } = this.props;
    return (
      <div
        className={styles.overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="button"
        tabIndex="0"
        onKeyPress={() => {}}
      >
        <div className={styles.modal}>
          <img src={gallery[index]} alt="image_makeup" />
          <div className={styles.bntsNavigation}>
            <button
              onClick={({ target }) => this.handleTakeValue(target)}
              name="left"
              type="button"
              disabled={!index}
            >
              ◀
            </button>
            <button
              onClick={({ target }) => this.handleTakeValue(target)}
              name="right"
              type="button"
              disabled={index >= gallery.length - 1}
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
