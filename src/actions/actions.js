import { USER_LOGIN, USER_LOGOUT } from "./types";
import axios from "axios";
let userUrl = "localhost:8080/users";

export const UserLogin = (email, password) => {
  return dispatch => {
    return axios
      .post(userUrl + "/signin", { email: email, password: password })
      .then(response => {
        dispatch(userLoginSuccess(response.data.email, response.data._id));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const userLoginSuccess = (email, token) => {
  return {
    type: USER_LOGIN,
    email: email,
    token: token
  };
};

export const UserLogout = () => {
  return {
    type: USER_LOGOUT
  };
};
