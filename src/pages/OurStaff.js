/** @format */

import React, { Component } from "react";
import BannerC from "../components/BannerContact";
import StaffData from "./StaffData";
import StaffImgs from "./StaffImgs";

class OurStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <BannerC
          text="Our Staff"
          imgUrl="https://images.unsplash.com/photo-1560258018-c7db7645254e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwc3VufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <div className="ourstaff row">
          <h1 className="staff mytitles"> Our Hospital Specialists</h1>
          <div className="container">
            <h1 style={{ paddingBottom: "1em" }}>
              Click on card for more details
            </h1>
            <div className="row">
              {StaffData.map((sdata) => {
                return <StaffImgs key={sdata.id} joan={sdata} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurStaff;

// /** @format */

// import React, { Component } from "react";

// class OurStaff extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://api.github.com/users")
//       .then((response) => response.json())
//       .then((data) => this.setState({ user: data }));
//     // .then(data=>console.log(data));
//   }

//   render() {
//     let currentState = this.state.user;
//     return (
//       <div>
//         {currentState.map((single) => {
//           return (
//             <div
//               style={{
//                 padding: "2em",
//                 textAlign: "center",
//                 width: "20%",
//                 float: "left",
//               }}
//             >
//               <h1>{single.login}</h1>
//               <img src={single.avatar_url} style={{ width: "100%" }} />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default OurStaff;
