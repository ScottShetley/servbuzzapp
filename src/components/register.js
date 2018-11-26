import React, { Component } from "react";
import { connect } from "react-redux";
import { UserRegister, SetRole } from "../actions/actions";

const mapStateToProps = state => {
  return {
    role: state.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (email, password, table) => {
      dispatch(UserRegister(email, password, table));
    },
    onSetRole: role => {
      dispatch(SetRole(role));
    }
  };
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      table: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const isEnabled =
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.table.length;
    return (
      <div>
        <section className="login-block">
          <div className="col-1" />
          <div className="col-10 container tanBox">
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
                      className="form-control"
                      name="email"
                      onChange={this.handleChange}
                      placeholder="email"
                      type="text"
                      value={this.state.email}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="text-uppercase">
                      Password
                    </label>

                    <input
                      className="form-control"
                      name="password"
                      onChange={this.handleChange}
                      placeholder="password"
                      type="password"
                      value={this.state.password}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="text-uppercase">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      name="confirmPassword"
                      onChange={this.handleChange}
                      placeholder="confirm password"
                      type="password"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="table" className="text-uppercase">
                      Table
                    </label>

                    <input
                      className="form-control"
                      name="table"
                      onChange={this.handleChange}
                      placeholder="table"
                      type="text"
                      value={this.state.table}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      disabled={!isEnabled}
                      className="btn btn-login float-right"
                      onClick={() => {
                        this.props.onRegister(
                          this.state.email,
                          this.state.password,
                          this.state.table
                        );
                        switch (this.props.role) {
                          case 1:
                            return (
                              this.props.history.push("/buzzee"),
                              this.props.onSetRole(0)
                            );
                          default:
                            return this.props.history.push("/buzzor");
                        }
                      }}
                    >
                      Submit
                    </button>
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a
                          onClick={() => {
                            this.props.onSetRole(0);
                          }}
                          className="nav-link active"
                          data-toggle="pill"
                          href="buzzor"
                        >
                          Buzzor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={() => {
                            this.props.onSetRole(1);
                          }}
                          className="nav-link"
                          data-toggle="pill"
                          href="buzzee"
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
  mapStateToProps,
  mapDispatchToProps
)(Register);
