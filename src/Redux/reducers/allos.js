import AllosService from "../services/allos";
import { createMessage } from "../services/message";

import { ADD_NOTIFICATION } from "./notification";

const ALL_ALLOS = "allos/AllAllos";
const LOADING = "allos/AllosLoading";
const GET_ALLO = "allos/GetAllo";
const ALL_SLOTS = "allos/AllSlots";
const GET_SLOT = "allos/GetSlot";
const RESERVE_SLOT = "allos/ReserveSlot";
const UNRESERVE_SLOT = "allos/UnreserveSlot";
const VALIDATE_SLOT = "allos/ValidateSlot";
const GET_RESERVED_SLOTS = "allos/GetReservedSlots";
const GET_RUNNING_SLOTS = "allos/GetRunningSlots";
const CREATE_ALLO = "allos/CreateAllo";
const EDIT_ALLO = "allos/EditAllo";
const DELETE_ALLO = "allos/DeleteAllo";

export {
  ALL_ALLOS,
  LOADING,
  GET_ALLO,
  ALL_SLOTS,
  GET_SLOT,
  RESERVE_SLOT,
  UNRESERVE_SLOT,
  VALIDATE_SLOT,
  GET_RESERVED_SLOTS,
  GET_RUNNING_SLOTS,
  CREATE_ALLO,
};

const initialState = {
  reservedSlots: [],
  runningSlots: [],
  allos: [],
  allo: null,
  slots: [],
  slot: null,
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
    case LOADING:
      state = {
        ...state,
        loading: action.payload,
      };
      break;
    case ALL_SLOTS:
      state = {
        ...state,
        slots: action.payload,
        loading: false,
      };
      break;
    case GET_SLOT:
      state = {
        ...state,
        slot: action.payload,
        loading: false,
      };
      break;
    case RESERVE_SLOT:
      state = {
        ...state,
        slot: null,
        slots: [],
        reservedSlots: [],
        loading: false,
      };
      break;
    case UNRESERVE_SLOT:
      state = {
        ...state,
        slot: null,
        slots: [],
        reservedSlots: [],
        loading: false,
      };
      break;
    case VALIDATE_SLOT:
      state = {
        ...state,
        slot: null,
        slots: [],
        reservedSlots: [],
        loading: false,
      };
      break;
    case GET_RESERVED_SLOTS:
      state = {
        ...state,
        reservedSlots: action.payload,
        loading: false,
      };
      break;
    case GET_RUNNING_SLOTS:
      state = {
        ...state,
        runningSlots: action.payload,
        loading: false,
      };
      break;
    case CREATE_ALLO:
      state = {
        ...state,
        loading: false,
      };
      break;
    case EDIT_ALLO:
      state = {
        ...state,
        loading: false,
      };
      break;
    case DELETE_ALLO:
      state = {
        ...state,
        loading: false,
      };
  }
  return state;
};

export function getAllos(login) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
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
    dispatch({ type: LOADING, payload: true });
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

export function createAllo(allo) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const state = getState();
    const response = await AllosService.createAllo(allo, state.auth.token);
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Impossible de créer cet allo 😢",
          "Réessaye plus tard",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: CREATE_ALLO,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: createMessage("Allo créé avec succès 😎", "", {
        type: "success",
        duration: 5000,
      }),
    });
  };
}

export function getSlots(alloId) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const state = getState();
    const response = await AllosService.getSlots(alloId, state.auth.token);
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Impossible de récuperer les créneaux 😢",
          "Réessaye plus tard",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: ALL_SLOTS,
      payload: response.slots,
    });
  };
}

export function getSlot(alloId, slotId) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const state = getState();
    const response = await AllosService.getSlot(
      alloId,
      slotId,
      state.auth.token
    );
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Impossible de récuperer ce créneau 😢",
          "Réessaye plus tard",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: GET_SLOT,
      payload: response.slot,
    });
  };
}

export function reserveSlot(alloId, slotId) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const response = await AllosService.reserveSlot(
      alloId,
      slotId,
      getState().auth.token
    );
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Oups 😢",
          "Quelqu'un à déjà réservé ce créneau avant toi",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: RESERVE_SLOT,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: createMessage(
        "Créneau réservé avec succès 😎",
        "Tu as 15 minutes pour le valider",
        {
          type: "success",
          duration: 5000,
        }
      ),
    });
  };
}

export function validateSlot(alloId, slotId, phone) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const response = await AllosService.validateSlot(
      alloId,
      slotId,
      phone,
      getState().auth.token
    );
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Oups 😢",
          "Impossible de valider ton créneau, renseigne toi au près de la liste",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: VALIDATE_SLOT,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: createMessage("Créneau validé avec succès 😎", "", {
        type: "success",
        duration: 5000,
      }),
    });
  };
}

export function unreserveSlot(alloId, slotId) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const response = await AllosService.unreserveSlot(
      alloId,
      slotId,
      getState().auth.token
    );
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Oups 😢",
          "Impossible d'annuler ton créneau, renseigne toi au près de la liste",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: UNRESERVE_SLOT,
    });
    getSlots(alloId)(dispatch, getState);
    dispatch({
      type: ADD_NOTIFICATION,
      payload: createMessage("Créneau annulé avec succès 😎", "", {
        type: "success",
        duration: 5000,
      }),
    });
  };
}

export function getReservedSlots() {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const state = getState();
    const response = await AllosService.getReservedSlots(state.auth.token);
    if (!response.success) {
      return;
    }
    dispatch({
      type: GET_RESERVED_SLOTS,
      payload: response.reservedSlots,
    });
  };
}

export function getRunningSlots() {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const state = getState();
    const response = await AllosService.getRunningSlots(state.auth.token);
    if (!response.success) {
      return;
    }
    dispatch({
      type: GET_RUNNING_SLOTS,
      payload: response.slots,
    });
  };
}

export function editAllo(allo) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const state = getState();
    const response = await AllosService.editAllo(
      allo,
      state.auth.token,
    );
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Impossible de modifier l'allô 😢",
          "Réessaye plus tard",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: EDIT_ALLO,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: createMessage("Allo modifié avec succès 😎", "", {
        type: "success",
        duration: 5000,
      }),
    });
  };
}

export function deleteAllo(alloId) {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    const state = getState();
    const response = await AllosService.deleteAllo(alloId, state.auth.token);
    if (!response.success) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: createMessage(
          "Impossible de supprimer l'allô 😢",
          "Réessaye plus tard",
          { type: "danger", duration: 5000 }
        ),
      });
      return;
    }
    dispatch({
      type: DELETE_ALLO,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: createMessage("Allo supprimé avec succès 😎", "", {
        type: "success",
        duration: 5000,
      }),
    });
  };
}