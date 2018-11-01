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
        {/* <head>
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        </head> */}
        <section className="login-block">
          <div className="container">
            <div className="row">
              <div className="col-md-4 login-sec">
                <h2 className="text-center">Register Now</h2>
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
                  </div>
                </form>
                <div className="copy-text" />
              </div>
              <div className="col-md-8 banner-sec">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img
                        className="d-block img-fluid"
                        src="images\food-salad-restaurant-person.jpg"
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          {/* <h2>This is Heaven</h2> */}
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid"
                        src="images\menu-restaurant-vintage-table.jpg"
                        alt="Second slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          {/* <h2>This is Heaven</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid"
                        src="images\pexels-photo-1332191.jpeg"
                        alt="Third slide"
                      />

                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          {/* <h2>This is Heaven</h2> */}
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      // placeholder stuff
      // <div>
      //   <h1 className="cover-heading">Register</h1>
      //   <p className="lead">lorem ipsum</p>
      // </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Register);
