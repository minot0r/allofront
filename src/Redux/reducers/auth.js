import Cookies from "universal-cookie";
import AuthService from "../services/auth";
import { createMessage } from "../services/message";

import store from "../store";
import { ADD_NOTIFICATION } from "./notification";

const LOGIN_SUCCESS = "auth/LoginSuccess";
const LOGIN_FAILURE = "auth/LoginFailure";

const cookies = new Cookies();

const user = cookies.get("user");
const token = cookies.get("token");

const initialState =
  user && token
    ? {
        loggedIn: true,
        user: user,
        token: token,
      }
    : {
        loggedIn: false,
        user: null,
        token: null,
      };

export const authReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case LOGIN_SUCCESS:
      state = {
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
      break;
    case LOGIN_FAILURE:
      state = {
        loggedIn: false,
        user: null,
        token: null,
      };
      break;
  }
  return state;
};

export function login(username, password) {
  return async (dispatch) => {
    const response = await AuthService.login(username, password);
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Connexion échouée",
          "Nom d'utilisateur ou mot de passe invalide :(",
          { type: "danger" }
        ),
      });
      dispatch({
        type: LOGIN_FAILURE,
      });
      return;
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: response.user,
        token: response.token,
      },
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: createMessage(
        "Connexion réussie",
        `Bienvenue ${response.user.name}!`,
        {
          type: "success",
        }
      ),
    });
  };
}
