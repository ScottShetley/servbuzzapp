import { USER_LOGIN, USER_LOGOUT } from "../actions/types";

const initialState = {
  username: null,
  token: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        username: action.username,
        token: action.token
      };
    case USER_LOGOUT:
      return {
        ...state,
        username: null,
        token: null
      };
    default:
      return state;
  }
};
