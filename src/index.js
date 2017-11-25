import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Store from "./Store";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Router>
    <Store />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
