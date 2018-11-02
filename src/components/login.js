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
          <div className="container">
            <div className="row">
              <div className="col-md-4 login-sec">
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

                          <h2>Welcome To Service Buzz</h2>
                          <p>
                            Servicebuzz is an app that allows a Buzzor to "buzz"
                            a Buzee for service. Remember, use Servicebuzz
                            nicely. Buzz unto others as you would wish to be
                            buzzed upon yourself. Register as a Buzzor(person
                            recieving service) or a Buzzee(person giving
                            service).

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

                          <h2>Welcome To Service Buzz</h2>
                          <p>
                            Servicebuzz is an app that allows a Buzzor to "buzz"
                            a Buzee for service. Remeber, use Servicebuzz
                            nicely. Buzz unto others as you would wish to be
                            buzzed upon yourself. Register as a Buzzor(person
                            recieving service) or a Buzzee(person giving
                            service).

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

                          <h2>Welcome To Service Buzz</h2>
                          <p>
                            Service Buzz is an app that allows a Buzzor to
                            "buzz" a Buzee for service. Remeber, use Service
                            Buzz nicely. Buzz unto others as you would wish to
                            be buzzed upon yourself. Register as a Buzzor(person
                            recieving service) or a Buzzee(person giving
                            service).

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

      //this is a backup of the previous code. attempting to import scott's code above

      // <div>
      //   <h3>Login</h3>
      //   <div className="form-group">
      // <input
      //   className="form-control"
      //   placeholder="username"
      //   value={this.state.username}
      //   onChange={this.handleUserChange}
      //   name="username"
      // />
      //     {this.state.username}
      //   </div>
      //   <div className="form-group">
      //     <input
      //       className="form-control"
      //       placeholder="password"
      //       value={this.state.password}
      //       onChange={this.handlePasswordChange}
      //       name="password"
      //     />
      //     {this.state.password}
      //   </div>
      //   <div className="form-group">
      //     <button
      //       className="btn btn-default"
      //       onClick={() => {
      //         console.log(this.state.username);
      //         console.log(this.state.password);

      //         this.props.onLogin(this.state.username, this.state.password);
      //         this.props.history.push("/");
      //       }}
      //     >
      //       Submit
      //     </button>
      //   </div>
      // </div>
    );
  }
}

//this is the stateless component

// const Login = props => {
//   let username;
//   let password;
//   return (
//     <div>
//       <h3>Login</h3>
//       <div className="form-group">
//         <input
//           className="form-control"
//           placeholder="username"
//           ref={u => {
//             username = u;
//           }}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           className="form-control"
//           placeholder="password"
//           ref={p => {
//             password = p;
//           }}
//         />
//       </div>
//       <div className="form-group">
//         <button
//           className="btn btn-default"
//           onClick={() => {
//             props.onLogin(username.value, password.value);
//             props.history.push("/");
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

//this did not change

export default connect(
  null,
  mapDispatchToProps
)(Login);
