/** @format */

import React, { Component } from "react";
class BannerC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="bannercontact"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(" +
            this.props.imgUrl +
            ")",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="pagcontact">{this.props.text}</h1>
      </div>
    );
  }
}

export default BannerC;
