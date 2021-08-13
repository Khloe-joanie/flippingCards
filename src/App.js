/** @format */

import React, { Component } from "react";
import "./css/style.css";
import BounceLoader from "react-spinners/BounceLoader";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurStaff from "./pages/OurStaff";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    let loading = false;
    return (
      <>
        {loading ? (
          <BounceLoader
            color={"#FFA200"}
            loading={loading}
            // css={override}
            className="loader"
            size={60}
          />
        ) : (
          <Router>
            <Navbar />
            <Switch>
              <Route path="/flippingCards/" exact component={Home} />
              <Route path="/flippingCards/about" component={About} />
              <Route path="/flippingCards/ourstaff" component={OurStaff} />
              <Route path="/flippingCards/contact" component={Contact} />
            </Switch>
          </Router>
        )}
      </>
    );
  }
}

export default App;
