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
      CompanyLogo
    </a>
    <div class="header-right">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </div>
);

export default withRouter(connect(mapStateToProps)(Header2));
