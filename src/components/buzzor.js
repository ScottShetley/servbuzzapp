import React from "react";
import { connect } from "react-redux";
import { CreateBuzz } from "../actions/actions";

const mapStateToProps = state => {
  return {
    sender: state.sender,
    table: state.table
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateBuzz: (sender, table, message) =>
      dispatch(CreateBuzz(sender, table, message))
  };
};

const Buzzor = props => {
  let message;
  let sender = props.sender;
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
            props.onCreateBuzz(sender, table, message.value);
          }}
        >
          <picture>
            <source
              srcset="images\ServicebuttonTestsmall-min.png"
              media="(max-width: 600px)"
            />
            <source
              srcset="images\ServicebuttonTestmedium-min.png"
              media="(max-width: 1500px)"
            />
            <source srcset="images\ServicebuttonTest400-min.png" />
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
