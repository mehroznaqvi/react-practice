import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

//Components

import Area from "./Components/areaofTriangle";
import ImageSlider from "./Components/imageSlider";
import Employee from "./Components/Employee";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Area></Area>
      <ImageSlider />
      <Employee
        headerProp="Header from props..."
        contentProp="Content from props..."
      ></Employee>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
