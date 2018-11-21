import {
  CREATE_BUZZ,
  DISMISS_BUZZ,
  LOAD_BUZZES,
  USER_LOGIN,
  USER_LOGOUT
} from "../actions/types";

const initialState = {
  email: null,
  table: null,
  token: null,
  buzzes: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BUZZ:
      return {
        ...state,
        buzzes: [...state.buzzes, action.data]
      };
    case DISMISS_BUZZ:
      return {
        ...state,
        buzzes: [...state.buzzes.filter(b => b._id !== action.data._id)]
      };
    case LOAD_BUZZES:
      return {
        ...state,
        buzzes: action.buzzes
      };
    case USER_LOGIN:
      return {
        ...state,
        email: action.email,
        table: action.table,
        sender: action.sender,
        token: action.token
      };
    case USER_LOGOUT:
      return {
        ...state,
        email: null,
        sender: null,
        table: null,
        token: null
      };

    default:
      return state;
  }
};