import Cookies from "universal-cookie";
import AuthService from "../services/auth";
import { createMessage } from "../services/message";

import { ADD_NOTIFICATION } from "./notification";

const LOGIN_SUCCESS = "auth/LoginSuccess";
const LOGIN_FAILURE = "auth/LoginFailure";
const LOGIN_LOADING = "auth/LoginLoading";
const LOGOUT = "auth/Logout";

const cookies = new Cookies();

const user = cookies.get("user");
const token = cookies.get("token");

const initialState =
  user && token
    ? {
        loggedIn: true,
        user: user,
        token: token,
        loading: false,
      }
    : {
        loggedIn: false,
        user: null,
        token: null,
        loading: false,
      };

export const authReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case LOGIN_SUCCESS:
      state = {
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
      break;
    case LOGIN_FAILURE:
      state = {
        loggedIn: false,
        user: null,
        token: null,
        loading: false,
      };
      break;
    case LOGIN_LOADING:
      state = {
        ...state,
        loading: action.payload,
      };
      break;
    case LOGOUT:
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
    dispatch({ type: LOGIN_LOADING, payload: true });
    await new Promise((res) => setTimeout(res, 1000));
    try {
      const response = await AuthService.login(username, password);
      if (!response) {
        dispatch({ type: LOGIN_FAILURE });
        return;
      }
      if (!response.success) {
        dispatch({
          type: ADD_NOTIFICATION,
          payload: createMessage(
            "Connexion échouée",
            "Nom d'utilisateur ou mot de passe invalide 😞",
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
          `Bienvenue ${response.user.name} 👋`,
          {
            type: "success",
          }
        ),
      });
    } catch {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Erreur 😞",
          "Impossible de se connecter au serveur d'authentification",
          { type: "danger" }
        ),
      });
    }
  };
}

export function logout() {
  return async (dispatch) => {
    AuthService.logout();
    dispatch({
      type: LOGOUT,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: createMessage(
        "Déconnexion réussie",
        "A bientôt 😊",
        {
          type: "success",
        }
      )
    });
  };
}