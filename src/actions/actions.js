//importing dependencies
import {
  CREATE_BUZZ,
  DISMISS_BUZZ,
  LOAD_BUZZES,
  USER_LOGIN,
  USER_LOGOUT
} from "./types";
import axios from "axios";

//setting the api and user urls. comment out localhost and uncomment the remote url for remote testing
const apiUrl = "http://localhost:8080/buzzes";
// const apiUrl = "https://servbuzzserver.herokuapp.com/buzzes";
const userUrl = "http://localhost:8080/users";
// const userUrl = "https://servbuzzserver.herokuapp.com/users";

export const CreateBuzz = (sender, table, message) => {
  return dispatch => {
    return axios
      .post(apiUrl + "/createBuzz", { sender, table, message })
      .then(response => {
        dispatch(createBuzzSuccess(response.data));
      });
  };
};

export const createBuzzSuccess = data => ({
  type: CREATE_BUZZ,
  data
});

export const DismissBuzz = id => {
  return dispatch => {
    return axios.delete(apiUrl + "/" + id).then(response => {
      dispatch(dismissBuzzSuccess(response.data));
    });
  };
};

export const dismissBuzzSuccess = data => ({
  type: DISMISS_BUZZ,
  data
});

export const FetchBuzzes = () => {
  return dispatch => {
    return axios
      .post(apiUrl + "/fetchBuzzes")
      .then(response => dispatch(fetchBuzzesSuccess(response.data)));
  };
};

export const fetchBuzzesSuccess = buzzes => {
  console.log(buzzes);
  return {
    type: LOAD_BUZZES,
    buzzes
  };
};

export const UserLogin = (email, password, table) => {
  return dispatch => {
    return axios
      .post(userUrl + "/login", {
        email: email,
        password: password
      })
      .then(response => {
        dispatch(
          userLoginSuccess(
            response.data.email,
            response.data._id,
            table,
            response.data._id
          )
        );
      })
      .catch(error => {
        throw error;
      });
  };
};

export const UserRegister = (email, password, table) => {
  return dispatch => {
    return axios
      .post(userUrl + "/register", {
        email: email,
        password: password
      })
      .then(response => {
        dispatch(
          userLoginSuccess(
            response.data.email,
            response.data._id,
            table,
            response.data._id
          )
        );
      })
      .catch(error => {
        throw error;
      });
  };
};

export const userLoginSuccess = (email, sender, table, token) => {
  return {
    type: USER_LOGIN,
    email: email,
    sender: sender,
    table: table,
    token: token
  };
};

export const UserLogout = () => {
  return {
    type: USER_LOGOUT
  };
};
