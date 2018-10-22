import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    token: state.token,
    username: state.username
  };
};

const Header = props => (
  <header className="mastHead">
    <div className="inner">
      <h3 className="masthead-brand">Whisper</h3>
      <nav className="nav nav-masthead justify-content-center">
        <NavLink exact activeClassName="active" className="nav-link" to="/">
          Home
        </NavLink>
        {props.token === null && (
          <NavLink activeClassName="active" className="nav-link" to="/login">
            Login
          </NavLink>
        )}
        {props.token && (
          <NavLink activeClassName="active" className="nav-link" to="/logout">
            Logout {props.username}
          </NavLink>
        )}
      </nav>
    </div>
  </header>
);

export default withRouter(connect(mapStateToProps)(Header));
