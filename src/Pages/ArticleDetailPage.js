import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";

import ArticleHeader from "./../Components/ArticleHeader";

const LandingPageObserver = observer(
  class LandingPage extends Component {
    componentWillReact() {
      console.log("I will re-render, since the observables changed!");
    }

    render() {
      const articles = this.props.store;
      console.log(articles);

      return (
        <div
          className={css({
            marginBottom: "64px"
          })}
        >
          <ArticleHeader />
        </div>
      );
    }
  }
);

export default LandingPageObserver;
