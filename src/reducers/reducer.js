import {
  CREATE_BUZZ,
  DISMISS_BUZZ,
  LOAD_BUZZES,
  SET_ROLE,
  USER_LOGIN,
  USER_LOGOUT
} from "../actions/types";

const initialState = {
  email: null,
  table: null,
  token: null,
  buzzes: [],
  role: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE:
      return {
        ...state,
        role: action.role
      };
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
        userId: action.userId,
        token: action.token
      };
    case USER_LOGOUT:
      return {
        ...state,
        email: null,
        userId: null,
        table: null,
        token: null,
        role: 0
      };

    default:
      return state;
  }
};
