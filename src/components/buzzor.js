import React from "react";
import Push from "../../node_modules/push.js";

// check for dynamically importing via module

const Buzzor = props => (
  <div>
    <h1 className="cover-heading">buzzor works</h1>
    <button
      // className="btn btn-primary"
      // onClick={this.handleNotificationChange}
      onClick={() => {
        Push.create("Buzzor Works");
      }}
    >
      Buzz
    </button>
  </div>
);

export default Buzzor;

// Was stateful, changed to the stateless (above) on Clinton's recommendation

// class Buzzor extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // userHasClicked: null
//     };
//   }

//   // handleNotificationChange = event => {
//   //   this.setState({ userHasClicked: event.target.value });
//   // };

//   render() {
//     return (
//       <div>
//         <h1 className="cover-heading">buzzor works</h1>
//         <button
//           // className="btn btn-primary"
//           // onClick={this.handleNotificationChange}
//           onClick={Push.create("Buzzor Works")}
//         >
//           Buzz
//         </button>
//       </div>
//     );
//   }
// }
// export default Buzzor;
