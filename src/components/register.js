import React, { Component } from "react";
import { connect } from "react-redux";
import { UserRegister } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (name, email, password) =>
      dispatch(UserRegister(name, email, password))
  };
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
  }
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <section className="login-block">
        <div className="col-1"/>
          <div className="col-10 container">
            <div className="row">
              <div className="col-sm-1"/>
              <div className="col-sm-10 login-sec">
                <h2 className="text-center">Register</h2>
                <form className="login-form">
                  <div className="form-group">
                    <label htmlFor="name" className="text-uppercase">
                      Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                      name="name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="text-uppercase">
                      Email
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
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
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      name="password"
                      // onChange={() => {
                      //   //verification part - confirm password
                      // }}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-login float-right"
                      onClick={() => {
                        console.log(this.state.name);
                        console.log(this.state.email);
                        console.log(this.state.password);
                        this.props.onRegister(
                          this.state.name,
                          this.state.email,
                          this.state.password
                        );

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
                </form>
                <div className="copy-text" />
              </div>
              <div className="col-sm-1"/>
            </div>
          </div>
          <div className="col-sm-1"/>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Register);
