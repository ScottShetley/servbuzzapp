import React from "react";
import { DismissBuzz } from "../actions/actions";
import { connect } from "react-redux";
// import Push from "../../node_modules/push.js";

const mapStateToProps = state => {
  return {
    buzzes: state.buzzes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //i dont think this is necessary
    // onFetchBuzzes: buzzes => dispatch(FetchBuzzes(buzzes)),
    //we will probably need to dispatch the dismissal
    onDismissBuzz: id => dispatch(DismissBuzz(id))
  };
};

// messing with the buzzees
const Buzzee = props => (
  <div>
    {/* <h1 className="cover-heading">buzzee works</h1> */}
    {props.buzzes.map(b => (
      <div className="row d-flex justify-content-center form-group" key={b._id}>
        {b.message}
        <div>
          {/* Push.create("Buzzor Works")*/}
          <button
            className="btn btn-danger"
            onClick={() => props.onDismissBuzz(b._id)}
          >
            Dismiss
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buzzee);
