import AllosService from "../services/allos";
import { createMessage } from "../services/message";

import { ADD_NOTIFICATION } from "./notification";

const ALL_ALLOS = "allos/AllAllos";
const ALLOS_LOADING = "allos/AllosLoading";

const initialState = {
  allos: [],
  loading: false,
};

export const allosReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ALL_ALLOS:
      state.allos = action.payload.allos;
      break;
    case ALLOS_LOADING:
      state.loading = action.payload;
      break;
  }
  return state;
};

export function getAllos() {
  return async (dispatch) => {
    dispatch({ type: ALLOS_LOADING, payload: true });
    const response = await AllosService.getAllos();
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Impossible de récuperer nos allos 😢",
          "Réessaye plus tard",
          { type: "danger" }
        ),
      });
      return;
    }
    dispatch({
      type: ALL_ALLOS,
      payload: {
        allos: response.allos,
      },
    });
  };
}
