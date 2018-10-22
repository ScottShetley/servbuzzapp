import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { UserLogout } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(UserLogout())
  };
};

const Logout = props => {
  props.onLogout();
  return <Redirect to="login" />;
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
