import React from "react";

const Home = props => (
  <div>
    <div className="col-md-12 banner-sec">
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
                  SERVBUZZ is an app that allows a Buzzor to "buzz" a Buzee for
                  service. Remember, use Servicebuzz nicely. Buzz unto others as
                  you would wish to be buzzed upon yourself. Register as a
                  Buzzor(person recieving service) or a Buzzee(person giving
                  service).
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
                <h2>SERVBUZZ</h2>
                <p>
                  SERVBUZZ is an app that allows a Buzzor to "buzz" a Buzee for
                  service. Remember, use Servicebuzz nicely. Buzz unto others as
                  you would wish to be buzzed upon yourself. Register as a
                  Buzzor(person recieving service) or a Buzzee(person giving
                  service).
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
                <h2>SERVBUZZ</h2>
                <p>
                  SERVBUZZ is an app that allows a Buzzor to "buzz" a Buzee for
                  service. Remember, use Servicebuzz nicely. Buzz unto others as
                  you would wish to be buzzed upon yourself. Register as a
                  Buzzor(person recieving service) or a Buzzee(person giving
                  service).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
