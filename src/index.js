import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

import { getAllos, getRunningSlots } from "./Redux/reducers/allos";
import ScrollTop from "./ScrollTop";

const state = store.getState();
const loggedIn = state.auth.loggedIn;
const admin = state.auth.user?.admin;

store.dispatch(getAllos(loggedIn));

if(admin) {
  store.dispatch(getRunningSlots());
}

const stripePromise = loadStripe(
  "pk_live_51KUC4VLla50ZhlMdr17OLoMKU8XHMlKmtnb5zmfOq2mufiaLMJhm5iU2STfl1SUNj3Z5x8EY8Tt9W1h6fHUpeFeD00V7s1WFlM"
);

ReactDOM.render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <React.StrictMode>
          <ScrollTop>
            <App />
          </ScrollTop>
        </React.StrictMode>
      </BrowserRouter>
    </Elements>
  </Provider>,
  document.getElementById("root")
);
