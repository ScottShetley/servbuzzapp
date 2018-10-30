import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../scott.css";

const mapStateToProps = state => {
  return {
    token: state.token,
    email: state.email
  };
};

const Header2 = props => (
  <div class="header">
    <a href="#default" class="logo">
      <link
        href="https://fonts.googleapis.com/css?family=Monoton"
        rel="stylesheet"
      />
      Service Buzz
    </a>
    <div class="header-right">
      <a class="active" href="#home">
        <NavLink exact activeClassName="active" to="/" />
        Home
      </a>
      {props.token === null && (
        <a class="active" href="#login">
          <NavLink activeClassName="active" className="nav-link" to="/login" />
          Login
        </a>
      )}
      {props.token === null && (
        <a class="active" href="#registration">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/register"
          />
          Registration
        </a>
      )}
      {props.token && (
        <NavLink activeClassName="active" className="nav-link" to="/logout">
          Logout {props.email}
        </NavLink>
      )}
    </div>
  </div>
);

export default withRouter(connect(mapStateToProps)(Header2));
