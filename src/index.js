import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import router from "./router/index";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App>{router()}</App>
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
