import React from "react";
import ReactDOM from "react-dom";
import './css/style.css';

//Components

import Area from "./Components/areaofTriangle";
import ImageSlider from "./Components/imageSlider";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Area></Area>
      <ImageSlider/>

      
    </div>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
