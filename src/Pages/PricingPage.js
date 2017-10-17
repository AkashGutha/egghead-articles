import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import PricingTierCard from "./../Components/PricingTierCard";

const PricingPageObserver = observer(
  class PricingPage extends Component {
    componentWillReact() {
      console.log("I will re-render, since the observables changed!");
    }

    render() {
      return (
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          })}
        >
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between"
            })}
          >
            <h1>Invest in you programming skills</h1>
          </div>

          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "215px"
            })}
          >
            <PricingTierCard />
            <PricingTierCard />
            <PricingTierCard />
          </div>
        </div>
      );
    }
  }
);

export default withRouter(PricingPageObserver);
