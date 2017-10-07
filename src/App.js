import React, { Component } from "react";
import { Route } from "react-router";
import LandingPage from "./Pages/LandingPage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
      </div>
    );
  }
}

export default App;
