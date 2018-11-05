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
          <div className="container">
            <div className="row">
              <div className="col-md-4 login-sec">
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
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-contact-tab"
                          data-toggle="pill"
                          href="#pills-contact"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          {/* Contact */}
                        </a>
                      </li>
                    </ul>
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
                          <h2>SERVBUZZ</h2>
                          <p>
                            SERVBUZZ is an app that allows a Buzzor to "buzz" a
                            Buzee for service. Remember, use Servicebuzz nicely.
                            Buzz unto others as you would wish to be buzzed upon
                            yourself. Register as a Buzzor(person recieving
                            service) or a Buzzee(person giving service).
                          </p>
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
                          <h2>SERVBUZZ</h2>
                          <p>
                            SERVBUZZ is an app that allows a Buzzor to "buzz" a
                            Buzee for service. Remember, use Servicebuzz nicely.
                            Buzz unto others as you would wish to be buzzed upon
                            yourself. Register as a Buzzor(person recieving
                            service) or a Buzzee(person giving service).
                          </p>
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
                          <h2>SERVBUZZ</h2>
                          <p>
                            SERVBUZZ is an app that allows a Buzzor to "buzz" a
                            Buzee for service. Remember, use Servicebuzz nicely.
                            Buzz unto others as you would wish to be buzzed upon
                            yourself. Register as a Buzzor(person recieving
                            service) or a Buzzee(person giving service).
                          </p>
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
