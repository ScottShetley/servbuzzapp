import React, { Component } from "react";
import { connect } from "react-redux";
import { UserLogin, SetRole } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password, table) => {
      dispatch(UserLogin(email, password, table));
    },
    onSetRole: role => {
      dispatch(SetRole(role));
    }
  };
};

class Login extends Component {
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
    return (
      <div>
        <section className="login-block">
          <div className="col-1" />
          <div className="col-10 container">
            <div className="row">
              <div className="col-sm-1" />
              <div className="col-sm-10 login-sec">
                <h2 className="text-center">Login</h2>
                <div className="login-form">
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
                      type="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"
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
                  <br />
                  <br />
                  <br />
                  <button
                    className="btn btn-login float-right"
                    onClick={() => {
                      function storageAvailable(type) {
                        try {
                          var storage = window[type],
                            x = "__storage_test__";
                          storage.setItem(x, x);
                          storage.removeItem(x);
                          return true;
                        } catch (e) {
                          return (
                            e instanceof DOMException &&
                            // everything except Firefox
                            (e.code === 22 ||
                              // Firefox
                              e.code === 1014 ||
                              // test name field too, because code might not be present
                              // everything except Firefox
                              e.name === "QuotaExceededError" ||
                              // Firefox
                              e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                            // acknowledge QuotaExceededError only if there's something already stored
                            storage.length !== 0
                          );
                        }
                      }
                      if (storageAvailable("localStorage")) {
                        // Yippee! We can use localStorage awesomeness
                        console.log("Yippee!");
                      } else {
                        // Too bad, no localStorage for us
                        console.log("Awww!");
                      }
                      this.props.onLogin(
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
                    onFocus={() => {}}
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
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
          <div className="col-1" />
        </section>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);