import React, { Component } from "react";
import { css } from "glamor";
import { Observer } from "mobx-react";

import Header from "./../Components/Header";
import Paginator from "./../Components/Paginator";
import SmallCardPost from "./../Components/SmallCardPost";
import LargeCardPost from "./../Components/LargeCardPost";
import TopicsTabs from "./../Components/TopicsTabs";

class LandingPage extends Component {
  componentWillReact() {
    console.log("I will re-render, since the todo has changed!");
  }

  render() {
    return (
      <div
        className={css({
          marginBottom: "64px"
        })}
      >
        <Header />
        <nav
          className={css({
            display: "flex",
            marginTop: "60px",
            justifyContent: "space-around"
          })}
        >
          <TopicsTabs />
        </nav>
        <section
          className={css({
            display: "flex",
            marginTop: "60px",
            justifyContent: "center",
            paddingRight: "20px",
            paddingLeft: "20px",
            flexWrap: "wrap",
            alignContent: "stretch"
          })}
        >
          <Observer>{() => <p>{this.props.store}</p>}</Observer>
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <LargeCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
        </section>

        <section
          className={css({
            marginTop: "110px",
            display: "flex",
            justifyContent: "center"
          })}
        >
          <Paginator />
        </section>
      </div>
    );
  }
}

export default LandingPage;
