// import React from "react";
// import { NavLink, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import "../scott.css";

// const mapStateToProps = state => {
//   return {
//     token: state.token,
//     email: state.email
//   };
// };

// const Header = props => (
//   <header className="mastHead">
//     <div className="inner">
//       <h3 className="masthead-brand">{}</h3>
//       <nav className="nav nav-masthead justify-content-center">
//         <NavLink exact activeClassName="active" className="nav-link" to="/">
//           Home
//         </NavLink>{" "}
//         <NavLink activeClassName="active" className="nav-link" to="/buzzee">
//           Buzzee
//         </NavLink>{" "}
//         <NavLink activeClassName="active" className="nav-link" to="/buzzor">
//           Buzzor
//         </NavLink>
//         {props.token === null && (
//           <NavLink activeClassName="active" className="nav-link" to="/register">
//             Register
//           </NavLink>
//         )}
//         {props.token === null && (
//           <NavLink activeClassName="active" className="nav-link" to="/login">
//             Login
//           </NavLink>
//         )}
//         {props.token && (
//           <NavLink activeClassName="active" className="nav-link" to="/logout">
//             Logout {props.email}
//           </NavLink>
//         )}
//       </nav>
//     </div>
//   </header>
// );

// export default withRouter(connect(mapStateToProps)(Header));
