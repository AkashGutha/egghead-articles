import React, { Component } from "react";
import { Route } from "react-router";
import LandingPage from "./Pages/LandingPage";

import ArticleDetailPage from "./Pages/ArticleDetailPage";
import Store from "./Stores/ArticleStore";
import { loadArticles } from "./Services/ArticleService";

class App extends Component {
  componentWillMount() {
    loadArticles().then(articles => {
      Store.setArticles(articles);
      console.log(Store.articles);
    });
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return <ArticleDetailPage store={Store.articles[0]} />;
          }}
        />
      </div>
    );
  }
}

export default App;
