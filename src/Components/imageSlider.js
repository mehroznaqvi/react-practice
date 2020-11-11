/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class ImageSlider extends Component {
  state = {
    images: [
      "https://img.theculturetrip.com/768x432/wp-content/uploads/2017/10/shutterstock_526010827.jpg",
      "https://i.dawn.com/primary/2020/04/5eaaa28ea0616.jpg",
      "https://www.w3schools.com/howto/img_mountains.jpg",
    ],
    idx: 0,
  };

  handleNext = () => {
    if (this.state.idx < this.state.images.length - 1) {
      this.setState({
        idx: this.state.idx + 1,
      });
    }
  };

  handlePrevious = () => {
    if (this.state.idx > 0) {
      this.setState({
        idx: this.state.idx - 1,
      });
    }
  };

  render() {
    return (
      <div >
          <div className="slider-style">
        <button className="button-style" onClick={this.handlePrevious}>Previous</button>
        <img className="img-style"
         
          src={this.state.images[this.state.idx]}
        />

        <button className="button-style" onClick={this.handleNext}>Next</button>

          </div>
      </div>
    );
  }
}

export default ImageSlider;
