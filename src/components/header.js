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

const Header = props => (
  <header className="mastHead">
    <div className="inner">
      <h3 className="masthead-brand">
        {/* turn this on to have logo in the header */}
        {/* <img
          src="images\Service-buzz-logo-1.png"
          alt="logo"
          width="1000"
          height="300"
        /> */}
      </h3>
      <nav className="nav nav-masthead justify-content-center">
        <NavLink exact activeClassName="active" className="nav-link" to="/">
          Home
        </NavLink>

        {props.token === null && (
          <NavLink activeClassName="active" className="nav-link" to="/register">
            Register
          </NavLink>
        )}
        {props.token === null && (
          <NavLink activeClassName="active" className="nav-link" to="/login">
            Login
          </NavLink>
        )}

        {props.token && (
          <NavLink activeClassName="active" className="nav-link" to="/logout">
            Logout {props.email}
          </NavLink>
        )}
      </nav>

      <div>
        <img
          src="images\Service-buzz-Logo-3.png"
          alt="logo"
          class="responsive"
          width="1300"
          height="375"
        />
      </div>
    </div>
  </header>
);

export default withRouter(connect(mapStateToProps)(Header));
