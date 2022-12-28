import React, { Component } from "react";
import "./productRotableImage.scss";

const images = new Array(24);
const pixelsPerDegree = 2;

class ProductRotableImage extends Component {
  state = {
    dragging: false,
    imageIndex: this.props.imageIndex,
    dragStartIndex: 0,
  };

  componentDidMount = () => {
    document.addEventListener("mousemove", this.handleMouseMove, false);
    document.addEventListener("mouseup", this.handleMouseUp, false);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedColor !== this.props.selectedColor) {
      this.setState({
        dragging: false,
        imageIndex: 0,
        dragStartIndex: 0,
      });
    }

    if (prevProps.imageIndex !== this.props.imageIndex) {
      this.setState({
        dragging: false,
        imageIndex: this.props.imageIndex,
      });
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener("mousemove", this.handleMouseMove, false);
    document.removeEventListener("mouseup", this.handleMouseUp, false);
  };

  handleMouseDown = (event) => {
    this.setState((state) => ({
      dragging: true,
      dragStart: event.screenX,
      dragStartIndex: state.imageIndex,
    }));
  };

  handleMouseUp = () => {
    this.setState({ dragging: false });
  };

  updateImageIndex = (currentPosition) => {
    const numImages = images.length;
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    const { dragStart, imageIndex, dragStartIndex } = this.state;

    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;
    if (index < 1) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    if (index !== imageIndex) {
      this.setState({ imageIndex: index });
    }
  };

  handleMouseMove = (event) => {
    if (this.state.dragging) {
      this.updateImageIndex(event.screenX);
    }
  };

  renderImage = () => {
    const { imageIndex } = this.state;
    const { selectedColor } = this.props;

    return (
      <div className="rotatable-image">
        <img
          src={`/img/${selectedColor}/${selectedColor}-${imageIndex}.jpg`}
          alt={selectedColor}
        />
      </div>
    );
  };

  render = () => {
    return (
      <div className="rotatable-image" onMouseDown={this.handleMouseDown}>
        {this.renderImage()}
      </div>
    );
  };
}

export default ProductRotableImage;
