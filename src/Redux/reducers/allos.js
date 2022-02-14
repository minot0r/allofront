import AllosService from "../services/allos";
import { createMessage } from "../services/message";

import { ADD_NOTIFICATION } from "./notification";

const ALL_ALLOS = "allos/AllAllos";
const ALLOS_LOADING = "allos/AllosLoading";
const GET_ALLO = "allos/GetAllo";

export { ALL_ALLOS, ALLOS_LOADING, GET_ALLO };

const initialState = {
  allos: [],
  allo: {},
  loading: false,
};

export const allosReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ALL_ALLOS:
      state = {
        ...state,
        allos: action.payload,
        loading: false,
      };
      break;
    case GET_ALLO:
      state = {
        ...state,
        allo: action.payload,
        loading: false,
      };
      break;
    case ALLOS_LOADING:
      state = {
        ...state,
        loading: action.payload,
      };
      break;
  }
  return state;
};

export function getAllos(login) {
  return async (dispatch, getState) => {
    dispatch({ type: ALLOS_LOADING, payload: true });
    const state = getState();
    const response = await AllosService.getAllos(login, state.auth.token);
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Impossible de récuperer nos allos 😢",
          "Réessaye plus tard",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: ALL_ALLOS,
      payload: response.allos,
    });
  };
}

export function getAllo(id, login) {
  return async (dispatch, getState) => {
    dispatch({ type: ALLOS_LOADING, payload: true });
    const state = getState();
    const response = await AllosService.getAllo(id, login, state.auth.token);
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Impossible de récuperer cet allo 😢",
          "Réessaye plus tard",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: GET_ALLO,
      payload: response.allo,
    });
  };
}