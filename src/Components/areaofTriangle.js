import React, { Component } from "react";

class Area extends Component {
  constructor() {
    super();
    this.state = { input1: "", input2: "", input3: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const side =
      (parseInt(this.state.input1) +
        parseInt(this.state.input2) +
        parseInt(this.state.input3)) /
      2;
    const aT = Math.sqrt(
      side *
        ((side - parseInt(this.state.input1)) *
          (side - parseInt(this.state.input1)) *
          (side - parseInt(this.state.input1)))
    );
    this.setState((state) => ({ ...state, aT }));
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="number"
            placeholder="a"
            name="input1"
            onChange={this.handleChange}
          ></input>
        </div>

        <div>
          <input
            type="number"
            placeholder="b"
            name="input2"
            onChange={this.handleChange}
          ></input>
        </div>

        <div>
          <input
            type="number"
            placeholder="c"
            name="input3"
            onChange={this.handleChange}
          ></input>
        </div>

        <div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>

        <div>
          <label>The area of Triangle is: {this.state.aT} </label>
        </div>
      </div>
    );
  }
}

export default Area;
