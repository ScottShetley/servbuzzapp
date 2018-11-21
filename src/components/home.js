import React from "react";

const Home = props => (
  <section className="login-block">
    <div className="container">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10 banner-sec imageButton">
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
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  className="d-block img-fluid"
                  src="images\food-salad-restaurant-person-min.jpg"
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <div className="banner-text">
                    <h2>SERVBUZZ</h2>
                    <p>
                      SERVBUZZ is an app that allows a Buzzor to "buzz" a Buzzee
                      for service. Remember, use SERVBUZZ nicely.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  src="images\menu-restaurant-vintage-table-min.jpg"
                  alt="Second slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <div className="banner-text">
                    <h2>Register</h2>
                    <p>
                      Register as a "Buzzor" or a "Buzzee". Buzzor is a person
                      recieving service. Buzzee is a person giving the service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  src="images\pexels-photo-1332191-min.jpeg"
                  alt="Third slide"
                />

                <div className="carousel-caption d-none d-md-block">
                  <div className="banner-text">
                    <h2>Login</h2>
                    <p>
                      After you Register, when you login another time using your
                      email and password. You can select if you are a Buzzor or
                      a Buzzee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  </section>
);

export default Home;
