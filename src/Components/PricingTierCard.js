import React, { Component } from "react";
import { css } from "glamor";
import { categoryTextStyle } from "./../Styles/TextStyles";

class PricingTierCard extends Component {
  truncate = (data, max_letters) => {
    if (data.length > max_letters) {
      return data.slice(0, max_letters) + "...";
    } else {
      return data;
    }
  };

  render() {
    return (
      <div
        className={css({
          width: "380px",
          height: "1000px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          border: "1px solid black",
          alignItems: "center"
        })}
      >

      <div className={css({
        width: "164px",
        height: "164px",
        backgroundColor: "#666",
        marginTop: "-82px"
      })}>
        
      </div>

      <h1 className={css({
        marginTop: "30px"
      })}>PRO</h1>

      </div>
    );
  }
}

export default PricingTierCard;
