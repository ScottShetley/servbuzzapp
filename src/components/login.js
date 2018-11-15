import React, { Component } from "react";
import { connect } from "react-redux";
import { UserLogin } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(UserLogin(email, password))
  };
};

//this is a transition to stateful

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      //scotts template

      <div>
        <section className="login-block">
        <div className="col-1"/>
          <div className="col-10 container">
            <div className="row">
              <div className="col-sm-1"/>
              <div className="col-sm-10 login-sec">
                <h2 className="text-center">Login</h2>
                <div className="login-form">
                  <div className="form-group">
                    <label htmlFor="email" className="text-uppercase">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-uppercase">
                      Password
                    </label>

                    <input
                      className="form-control"
                      type="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      name="password"
                    />
                  </div>
                  <br />
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <small>Remember Me</small>
                    </label>
                  </div>
                  <br />

                  <br />
                  <button
                    className="btn btn-login float-right"
                    onClick={() => {
                      console.log(this.state.email);
                      console.log(this.state.password);
                      this.props.onLogin(this.state.email, this.state.password);

                      this.props.history.push("/");
                    }}
                  >
                    Submit
                  </button>
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
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
                        Buzzee
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
                        Buzzor
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copy-text" />
              </div>
              <div className="col-sm-1"/>
            </div>
          </div>
          <div className="col-1"/>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
