import { USER_LOGIN, USER_LOGOUT } from "./types";
import axios from "axios";
let userUrl = "http://localhost:8080/users";

export const UserLogin = (username, password) => {
  return dispatch => {
    return axios
      .post(userUrl + "/signin", { username: username, password: password })
      .then(response => {
        dispatch(userLoginSuccess(response.data.username, response.data._id));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const userLoginSuccess = (username, token) => {
  return {
    type: USER_LOGIN,
    username: username,
    token: token
  };
};

export const UserLogout = () => {
  return {
    type: USER_LOGOUT
  };
};
