import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { HashRouter, Route } from "react-router-dom";
import "./stylesheet/main.css";

window.screen.orientation.lock("any");

ReactDOM.render(
  <HashRouter basename="/">
    <Route component={App} />
  </HashRouter>,
  document.getElementById("root")
);
