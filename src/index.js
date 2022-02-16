import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

import { getAllos } from "./Redux/reducers/allos";
import ScrollTop from "./ScrollTop";

const state = store.getState()
const loggedIn = state.auth.loggedIn;

store.dispatch(getAllos(loggedIn));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ScrollTop>
        <App />
        </ScrollTop>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
