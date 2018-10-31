import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <section className="login-block">
          <div className="container">
            <div className="row">
              <div className="col-md-4 login-sec">
                <h2 className="text-center">Register Now</h2>
                <form className="login-form">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="text-uppercase"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="text-uppercase"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="text-uppercase"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder=""
                    />
                    <br />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-login float-right">
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
                    <div
                      className="tab-content pt-2 pl-1"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        {/* Consequat occaecat ullamco amet non eiusmod nostrud
                        dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud
                        exercitation proident est nisi. Irure magna elit commodo
                        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                        veniam ad. Eiusmod consequat eu adipisicing minim anim
                        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                        exercitation irure Lorem incididunt nostrud. */}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      />
                      {/* <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      /> */}
                    </div>
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
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid"
                        src="images\menu-restaurant-vintage-table.jpg"
                        alt="Second slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          {
                            <div className="banner-text">
                              <h2>Welcome To Service Buzz</h2>
                              <p>
                                Service Buzz is an app that allows a Buzzor to
                                "buzz" a Buzee for service. Remeber, use Service
                                Buzz nicely. Buzz unto others as you would wish
                                to be buzzed upon yourself. Register as a
                                Buzzor(person recieving service) or a
                                Buzzee(person giving service).
                              </p>
                            </div>
                          }
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
                          <div className="banner-text">
                            <h2>Welcome To Service Buzz</h2>
                            <p>
                              Service Buzz is an app that allows a Buzzor to
                              "buzz" a Buzee for service. Remeber, use Service
                              Buzz nicely. Buzz unto others as you would wish to
                              be buzzed upon yourself. Register as a
                              Buzzor(person recieving service) or a
                              Buzzee(person giving service).
                            </p>
                          </div>
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

export default Register;
