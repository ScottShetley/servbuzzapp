// import React from "react";
// import { UpdateProfile } from "../actions/actions";
// import { connect } from "react-redux";

// const mapStateToProps = state => {
//   return {
//     email: state.email,
//     table: state.table,
//     sender: state.sender
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onUpdateProfile: (email, table, sender) =>
//       dispatch(UpdateProfile(email, table, sender))
//   };
// };

// const Profile = props => (
//   <div>
//     <div className="row d-flex justify-content-center form-group">
//       <div>
//         <button
//           className="btn btn-secondary"
//           onClick={() => props.onUpdateProfile(email, table, sender)}
//         >
//           Update
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Profile);
