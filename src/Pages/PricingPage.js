import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import PricingTierCard from "./../Components/PricingTierCard";

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
              paddingBottom: "0px",
              padding: "125px",
              paddingTop: "80px",
              justifyContent: "center"
            })}
          >
            <p
              className={css({
                width: "438px",
                fontSize: "48px",
                flexBasis: "30%"
              })}
            >
              Invest in your programming skills
            </p>

            <div
              className={css({
                display: "flex",
                border: "10px dashed #eee",
                flexBasis: "60%",
                boxSizing: "border-box",
                padding: "30px",
                justifyContent: "space-between",
                alignItems: "center"
              })}
            >
              <div>
                <p
                  className={css({
                    fontSize: "26px"
                  })}
                >
                  Save
                </p>
                <p
                  className={css({
                    fontSize: "60px",
                    fontWeight: "600"
                  })}
                >
                  50%
                </p>
              </div>

              <hr
                width="1"
                className={css({
                  height: "40px",
                  backgroundColor: "#666"
                })}
              />

              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexBasis: "65%",
                  textAlign: "center"
                })}
              >
                <p
                  className={css({
                    fontSize: "13px",
                    opacity: ".8"
                  })}
                >
                  DEAL ENDS IN
                </p>
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    flexBasis: "65%"
                  })}
                >
                  <TimeText topText="4" bottomText="DAYS" />
                  <TimeText topText="4" bottomText="HOURS" />
                  <TimeText topText="4" bottomText="MINUTES" />
                  <TimeText topText="4" bottomText="SECONDS" />
                </div>
              </div>
            </div>
          </div>

          {/* annual mothly tabs */}
          <div
            className={css({
              alignSelf: "center",
              padding: "0px 125px"
            })}
          >
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between"
              })}
            >
              <p
                className={css({
                  marginRight: "25px",
                  fontSize: "18px",
                  color: "black"
                })}
              >
                Anually
              </p>
              <p
                className={css({
                  fontSize: "18px",
                  color: "#888"
                })}
              >
                Monthly
              </p>
            </div>
            <hr
              className={css({
                margin: "15px -10px"
              })}
            />
          </div>

          {/* pricing tier cards */}
          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "0px 65px",
              paddingBottom: "50px"
            })}
          >
            <PricingTierCard />
            <PricingTierCard />
            <PricingTierCard />
          </div>

          {/* testimonials */}
          <div
            className={css({
              display: "flex",
              padding: "125px",
              backgroundColor: "#eee"
            })}
          >
            <h1>FAQ</h1>

            <div
              className={css({
                display: "flex"
              })}
            />
          </div>

          {/* FAQ */}
          <div
            className={css({
              display: "flex",
              padding: "125px"
            })}
          >
            <h1>FAQ</h1>

            <div
              className={css({
                display: "flex"
              })}
            />
          </div>
        </div>
      );
    }
  }
);

export default withRouter(PricingPageObserver);
