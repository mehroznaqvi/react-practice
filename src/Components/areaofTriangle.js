import React, { Component } from "react";

class Area extends Component {






  render() {
    return (
      <div>

        <div>
          <input type="number" placeholder="a" name="input1"></input>
        </div>

        <div>
          <input type="number" placeholder="b" name="input2"></input>
        </div>

        <div>
          <input type="number" placeholder="c" name="input3"></input>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>

      </div>
    );
  }
}


export default Area;