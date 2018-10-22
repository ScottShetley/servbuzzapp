import React from "react";
import { connect } from "react-redux";
import { UserLogin } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => dispatch(UserLogin(username, password))
  };
};

const Login = props => {
  let username;
  let password;
  return (
    <div>
      <h3>Login</h3>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="username"
          ref={u => {
            username = u;
          }}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="password"
          ref={p => {
            password = p;
          }}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-default"
          onClick={() => {
            props.onLogin(username.value, password.value);
            props.history.push("/");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
