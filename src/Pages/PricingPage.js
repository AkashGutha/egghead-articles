import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";

const PricingPageObserver = observer(
  class PricingPage extends Component {
    componentWillReact() {
      console.log("I will re-render, since the observables changed!");
    }

    render() {
      return <div />;
    }
  }
);

export default withRouter(PricingPageObserver);
