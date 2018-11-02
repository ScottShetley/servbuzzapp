//you'll have to import register once it's set up as a type
import { USER_LOGIN, USER_LOGOUT } from "./types";
import axios from "axios";
// let userUrl = "http://localhost:8080/users";
let userUrl = "https://servicebuzzserver.herokuapp.com/users";

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

export const UserRegister = (name, email, password) => {
  return dispatch => {
    return axios
      .post(userUrl + "/signup", {
        name: name,
        email: email,
        password: password
      })
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

// attempt the make register work

// export const userRegister = (email, password) => {
//   return dispatch => {
//     return axios
//       .post(userUrl + "/signup", { email: email, password: password })
//       .then(response => {
//         dispatch(userRegisterSuccess(response.data.email, response.data._id));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };

// export const userRegisterSuccess = (email, token) => {
//   return {
//     type: USER_REGISTER,
//     email: email,
//     token: token
//   };
// };

export const UserLogout = () => {
  return {
    type: USER_LOGOUT
  };
};
