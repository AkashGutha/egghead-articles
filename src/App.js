import React, { Component } from "react";
import { Route } from "react-router";
import LandingPage from "./Pages/LandingPage";
import ArticelsStore from "./Stores/ArticelsStore";

const Articles = new ArticelsStore();

class App extends Component {
  render() {

    Articles.getArticles();

    return (
      <div>
        <Route exact path="/" render={ () => <LandingPage store={Articles} />} />
      </div>
    );
  }
}

export default App;
