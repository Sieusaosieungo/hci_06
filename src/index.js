import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import router from "./router/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./_store/index";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>{router()}</App>
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
