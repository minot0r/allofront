import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

import { getAllos } from "./Redux/reducers/allos";

store.dispatch(getAllos);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
