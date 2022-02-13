import AllosService from "../services/allos";
import { createMessage } from "../services/message";

import { ADD_NOTIFICATION } from "./notification";

const ALL_ALLOS = "allos/AllAllos";
const ALLOS_LOADING = "allos/AllosLoading";

export { ALL_ALLOS, ALLOS_LOADING };

const initialState = {
  allos: [],
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
    case ALLOS_LOADING:
      state = {
        ...state,
        loading: action.payload,
      };
      break;
  }
  return state;
};

export async function getAllos(dispatch) {
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
    payload: response.allos,
  });
}
