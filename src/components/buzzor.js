import React from "react";
import { connect } from "react-redux";
import { CreateBuzz } from "../actions/actions";

const mapStateToProps = state => {
  return {
    buzzes: state.buzzes,
    userId: state.userId,
    table: state.table
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateBuzz: (userId, table, message) =>
      dispatch(CreateBuzz(userId, table, message))
  };
};

const Buzzor = props => {
  let message;
  let userId = props.userId;
  let table = props.table;
  return (
    <div className="flex-container">
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="message"
          placeholder="message"
          ref={m => {
            message = m;
          }}
        />
        <br />
        <div
          className="imageButton"
          onClick={() => {
            props.onCreateBuzz(userId, table, message.value);
          }}
        >
          <picture>
            <source
              srcSet="images\ServicebuttonTestsmall-min.png"
              media="(max-width: 600px)"
            />
            <source
              srcSet="images\ServicebuttonTestmedium-min.png"
              media="(max-width: 1500px)"
            />
            <source srcSet="images\ServicebuttonTest400-min.png" />
            <img src="images\ServBuzzTest.png" alt="Button" />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buzzor);
