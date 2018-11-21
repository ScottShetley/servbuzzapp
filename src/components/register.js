import React, { Component } from "react";
import { connect } from "react-redux";
import { UserRegister } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (email, password, table) =>
      dispatch(UserRegister(email, password, table))
  };
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      table: "",
      role: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <section className="login-block">
          <div className="col-1" />
          <div className="col-10 container">
            <div className="row">
              <div className="col-sm-1" />
              <div className="col-sm-10 login-sec">
                <h2 className="text-center">Register</h2>
                <form className="login-form">
                  <div className="form-group">
                    <label htmlFor="email" className="text-uppercase">
                      Email
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="text-uppercase">
                      Password
                    </label>

                    <input
                      className="form-control"
                      placeholder="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="text-uppercase">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      placeholder="confirm password"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="table" className="text-uppercase">
                      Table
                    </label>

                    <input
                      className="form-control"
                      type="text"
                      placeholder="table"
                      value={this.state.table}
                      onChange={this.handleChange}
                      name="table"
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-login float-right"
                      onClick={() => {
                        this.props.onRegister(
                          this.state.email,
                          this.state.password,
                          this.state.table
                        );
                        this.props.history.push("/");
                      }}
                    >
                      Submit
                    </button>
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-home-tab"
                          data-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          {/* changed the button text so that buzzor is default */}
                          Buzzor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          href="#pills-profile"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Buzzee
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
                <div className="copy-text" />
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
          <div className="col-sm-1" />
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Register);