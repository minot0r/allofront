import VendredjService from "../services/vendredj";
import { createMessage } from "../services/message";

import { ADD_NOTIFICATION } from "./notification";

const VENDREDJ_LOADING = "venredj/loading";
const REGISTER_FORM = "vendredj/register";
const GET_APPLICATIONS = "vendredj/applications";

export { REGISTER_FORM, GET_APPLICATIONS };

const initialState = {
  applications: [],
  loading: false,
};

export const vendredjReducer = (state = initialState, action) => {
  switch (action.type) {
    case VENDREDJ_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
        loading: false,
      };
    case REGISTER_FORM:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export function registerForm(name, instagram, musicType) {
  return async (dispatch) => {
    dispatch({
      type: VENDREDJ_LOADING,
      payload: true,
    });
    try {
      const response = await VendredjService.registerForm(
        name,
        instagram,
        musicType
      );
      dispatch({
        type: REGISTER_FORM,
      });
      if (!response.success) throw new Error();
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Trop coooooool 😎",
          "Ton formulaire à bien été envoyé, vérifie bientôt tes DMs instagram pour qu'on soit en contact !",
          {
            type: "success",
            duration: 5000,
          }
        ),
      });
    } catch (error) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Oups !",
          "Une erreur est survenue, veuillez réessayer plus tard.",
          {
            type: "error",
            duration: 5000,
          }
        ),
      });
    }
  };
}

export function getApplications(token) {
  return async (dispatch) => {
    dispatch({
      type: VENDREDJ_LOADING,
      payload: true,
    });
    try {
      const response = await VendredjService.getApplications(token);
      dispatch({
        type: GET_APPLICATIONS,
        payload: response.applications,
      });
    } catch (error) {
        console.error(error)
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Oups !",
          "Une erreur est survenue, veuillez réessayer plus tard.",
          {
            type: "danger",
            duration: 5000,
          }
        ),
      });
    }
  };
}
