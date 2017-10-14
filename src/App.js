import React, { Component } from "react";
import { Route } from "react-router";
import { Provider, observer } from "mobx-react";
import LandingPage from "./Pages/LandingPage";

import ArticleDetailPage from "./Pages/ArticleDetailPage";
import Store from "./Stores/ArticleStore";
import { loadArticles } from "./Services/ArticleService";

const App = observer(
  class AppComponent extends Component {
    componentWillMount() {
      loadArticles().then(articles => {
        console.log("load articles..");
        console.log(articles);
        Store.setArticles(articles);
        console.log(Store);
      });
    }

    render() {
      return (
        <div>
          <Route
            exact
            path="/"
            render={() => {
              return <ArticleDetailPage store={Store} />;
            }}
          />
        </div>
      );
    }
  }
);

export default App;
