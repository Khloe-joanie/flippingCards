/** @format */

import React, { Component } from "react";
import Banner from "../components/Banner";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner
          text="Contact"
          imgUrl="https://images.unsplash.com/photo-1506202687253-52e1b29d3527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
        />
      </>
    );
  }
}

export default Contact;
