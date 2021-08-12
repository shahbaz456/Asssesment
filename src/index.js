import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Favourite from "./components/Favourite";
import Details from "./components/Details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <>
    <ToastContainer />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/favourite" component={Favourite} />
        <Route exact path="/about/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
