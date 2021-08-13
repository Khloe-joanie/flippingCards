/** @format */

import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class StaffImgs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-4">
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="vertical" // horizontal or vertical
          ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          // style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
        >
          <FrontSide className="jimg">
            <img src={this.props.joan.ImgUrl} className="staffimg" />
            <p style={{ paddingTop: "1.5em" }}>
              Name : Dr. {this.props.joan.name}
            </p>
            <p>Specialty : {this.props.joan.specialty}</p>
            <p>Experience : {this.props.joan.experience} Years</p>
            <p>Position : {this.props.joan.position} </p>
            <p>Location : {this.props.joan.location} </p>
            <h5 className="front">Click to flip card</h5>
            <p style={{ textAlign: "center" }}>
              <b>(FRONT SIDE)</b>
            </p>
          </FrontSide>
          <BackSide className="back">
            <p style={{ paddingTop: "6.5em" }}>
              Overview: <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p>Position : {this.props.joan.position}</p>
            <p>Number of Surgeries : {this.props.joan.surgeries}</p>
            <p>Language(s) : {this.props.joan.language} </p>
            <p>Contact : {this.props.joan.contact} </p>
            <h5 style={{ textAlign: "center", paddingTop: "2em" }}>
              Click to flip card
            </h5>
            <p style={{ textAlign: "center" }}>
              <b>(BACK SIDE)</b>
            </p>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default StaffImgs;
