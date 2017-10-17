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

const FaqQna = ({ question, answer }) => (
  <div
    className={css({
      marginTop: "45px"
    })}
  >
    <p
      className={css({
        fontSize: "22px",
        fontWeight: "600"
      })}
    >
      {question}
    </p>
    <p
      className={css({
        fontSize: "22px",
        fontWeight: "300",
        marginTop: "25px"
      })}
    >
      {answer}
    </p>
  </div>
);

const PricingPageObserver = observer(
  class PricingPage extends Component {
    componentWillReact() {
      console.log("I will re-render, since the observables changed!");
    }

    render() {
      let faqs = [];

      for (let i = 0; i < 9; i++) {
        faqs.push(
          <div
            className={css({
              flexBasis: "45%"
            })}
          >
            <FaqQna
              question={"What's included with my membership?"}
              answer={`
                How often is new content released?

                As often as our instructors crank it out! At a minimum, it’s usually weekly and we announce it via Twitter (@eggheadio), via RSS feeds, and on Facebook.
                `}
            />
          </div>
        );
      }

      return (
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          })}
        >
          {/* header */}
          <div
            className={css({
              display: "flex",
              paddingBottom: "0px",
              padding: "125px",
              paddingTop: "80px",
              justifyContent: "space-between"
            })}
          >
            <p
              className={css({
                width: "438px",
                fontSize: "40px",
                flexBasis: "30%",
                alignSelf: "center"
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
              height: "200px",
              backgroundColor: "#f8f8f8",
              justifyContent: "center"
            })}
          >

           <div className={css({
             display:"felx",
             flexBasis: "80%",
             justifyContent: "center"
           })}>
           <p
              className={css({
                fontSize: "28px",
                fontStyle: "italic",
                fontWeight: "100",
                textAlign: "center"
              })}
            >
            “Egghead is the best training I’ve seen so far – cutting edge with the latest subjects, frameworks, languages – no bull….!”
            </p>
            <p
              className={css({
                fontSize: "16px",
                fontWeight: "100",
                color: "#999",
                marginTop: "32px",
                textAlign: "center"
              })}
            >
            Frederick Tyler, Product Manager in Microsoft
            </p>
           </div>
          </div>

          {/* FAQ */}
          <div
            className={css({
              padding: "125px"
            })}
          >
            <h1>FAQ</h1>

            <div
              className={css({
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
              })}
            >
              {faqs}
            </div>

            <div
              className={css({
                backgroundColor: "#333",
                padding: "70px",
                color: "white",
                marginTop: "100px"
              })}
            >
              <p
                className={css({
                  fontSize: "28px"
                })}
              >
                Got more questions?
              </p>
              <p
                className={css({
                  fontSize: "16px",
                  marginTop: "8px"
                })}
              >
                We’re here for you, leave us a message at help@egghead.io
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default withRouter(PricingPageObserver);
