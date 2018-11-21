import React from "react";
import { DismissBuzz } from "../actions/actions";
import { connect } from "react-redux";
import Push from "../../node_modules/push.js";

const mapStateToProps = state => {
  return {
    buzzes: state.buzzes,
    table: state.table
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //we need to dispatch the dismissal
    onDismissBuzz: id => dispatch(DismissBuzz(id))
  };
};

//sets a variable to track items that have caused a notification
const Buzzee = props => {
  let time = new Date();
  let arr = props.buzzes;
  let notify = () => {
    arr
      .filter(b => !b.delivered)
      .forEach(item => {
        console.log(item.content);
        item.delivered = true;
        Push.create("Buzzor Works");
      });
  };
  notify();
  notify();

  //displays the buzzes
  return arr.map(b => (
    <div className="row d-flex justify-content-center form-group" key={b._id}>
      <ul className="list-group">
        <li className="list-group-item buzzList">
          {b.message + " - " + props.table + " - " + time.toLocaleTimeString()}
          <div>
            <button
              className="btn buzzListButton"
              onClick={() => {
                props.onDismissBuzz(b._id);
              }}
            >
              Dismiss
            </button>
          </div>
        </li>
      </ul>
    </div>
  ));
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buzzee);
