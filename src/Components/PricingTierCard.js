import React, { Component } from "react";
import { css } from "glamor";
import { categoryTextStyle } from "./../Styles/TextStyles";

class PricingTierCard extends Component {
  render() {
    return (
      <div
        className={css({
          width: "380px",
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "150px",
          border: "1px solid black"
        })}
      >
        <div
          className={css({
            width: "164px",
            height: "164px",
            backgroundColor: "#666",
            marginTop: "-82px",
            alignSelf: "center"
          })}
        />

        <h1
          className={css({
            marginTop: "30px",
            alignSelf: "center"
          })}
        >
          PRO
        </h1>

        <p
          className={css({
            marginTop: "8px",
            width: "380px",
            fontSize: "18px",
            textAlign: "center",
            color: "#888"
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <button
          className={css({
            width: "340px",
            alignSelf: "center",
            backgroundColor: "#333",
            color: "white",
            padding: "15px 30px 15px 30px",
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: "600",
            fontFamily: "Avenir next",
            border: "none",
            marginTop: "25px"
          })}
        >
          LEVEL UP MY SKILLS
        </button>

        <p
          className={css({
            textAlign: "left",
            marginTop: "25px",
            fontSize: "16px",
            marginLeft: "30px",
            fontFamily: "helvetica neue",
            fontWeight: "900"
          })}
        >
          You’ll get:
        </p>

        <ul
          className={css({
            fontSize: "16px",
            color: "#888",
            lineHeight: "32px"
          })}
        >
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Doloremque cumque quas quo sit.</li>
          <li>Voluptates eius debitis possimus eos?</li>
          <li>In minima vel velit maiores.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Doloremque cumque quas quo sit.</li>
          <li>Voluptates eius debitis possimus eos?</li>
          <li>In minima vel velit maiores.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Doloremque cumque quas quo sit.</li>
          <li>Voluptates eius debitis possimus eos?</li>
          <li>In minima vel velit maiores.</li>
        </ul>
      </div>
    );
  }
}

export default PricingTierCard;
