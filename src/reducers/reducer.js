import { USER_LOGIN, USER_LOGOUT } from "../actions/types";

const initialState = {
  email: null,
  token: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        email: action.email,
        token: action.token
      };
    case USER_LOGOUT:
      return {
        ...state,
        email: null,
        token: null
      };
    default:
      return state;
  }
};
