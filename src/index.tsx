import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./main.scss";
import App from "./App";

const Main: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById("root"));
