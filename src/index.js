import React from "react";
import ReactDOM from "react-dom";

//Components

import Area from "./Components/areaofTriangle";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Area></Area>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
