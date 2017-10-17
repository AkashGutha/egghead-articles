import React, { Component } from "react";
import { css } from "glamor";
import { categoryTextStyle } from "./../Styles/TextStyles";

const TimeText = ({ topText, bottomText }) => (
  <div
    className={css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    })}
  >
    <p
      className={css({
        fontSize: "46px"
      })}
    >
      {topText}
    </p>
    <p
      className={css({
        fontSize: "14px"
      })}
    >
      {bottomText}
    </p>
  </div>
);


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

        {/* discount */}
        <div
          className={css({
            margin: "10px -10px",
            backgroundColor: "#888",
            display: "flex",
            padding: "20px 40px",
            justifyContent: "space-between",
            color: "white",
            alignItems: "center",
            background: `repeating-linear-gradient(
              45deg,
              #666,
              #666 10px,
              #333 10px,
              #333 12px
            )`
          })}
        >
          <p className={css({ fontSize: "30px" })}>SAVE 50%</p>
          <p className={css({ fontSize: "15px" })}>usually 299,99$</p>
        </div>

        {/* rate */}
        <div
          className={css({
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "5px",
            marginTop: "75px",
            height: "100px",
            width: "340px",
            alignSelf:"center",
            alignItems: "center"
          })}
        >
          <div
            className={css({
              display: "flex",
              marginTop: "-70px",
              padding: "10px",
              backgroundColor: "white"
            })}
          >
            <p className={css({
              color: "#888"
            })}>USD</p>
            <p className={css({
              fontSize: "17px"
            })}>$</p>
            <p className={css({
              fontSize: "52px",
              marginTop: "-10px"
            })}>99</p>
            <p>50</p>
          </div>

          <p className={css({
            color: "#AAA",
            letterSpacing: "2px",
            fontSize: "12px"
          })}>PER USER / BILLED ANUALLY</p>
        </div>

        {/* level up */}
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
