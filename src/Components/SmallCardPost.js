import React, { Component } from "react";
import { css } from "glamor";

import { categoryTextStyle } from "./../Styles/TextStyles";

class SmallCardPost extends Component {
  render() {
    const {
      content,
      images,
      author,
      category,
      publishedAt,
      formattedPublishedDate
    } = this.props.article;

    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          margin: "20px",
          width: "360px",
          ":hover": {
            cursor: "pointer"
          }
        })}
      >
        <div
          className={css({
            height: "240px",
            width: "360px",
            background: "url(https://d1ax1i5f2y3x71.cloudfront.net/items/0h431L1m1g0H3w2B1R1E/article-thumbnail-placeholder@2x.png) 50% 50% no-repeat blue",
            backgroundSize: "360px",
            borderRadius: "5px"
          })}
        />

        <p className={categoryTextStyle}>{category.toUpperCase()}</p>
        <p
          className={css({
            fontSize: "1.5em",
            marginLeft: "20px"
          })}
        >
          {content.title}
        </p>
        <p
          className={css({
            height: "58px",
            marginTop: "7px",
            fontWeight: "thin",
            opacity: "0.5",
            marginLeft: "20px"
          })}
        >
          {content.subtitle}
        </p>

        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            marginTop: "20px"
          })}
        >
          <div
            className={css({
              height: "40px",
              width: "40px",
              border: "1px solid #D8D8D8",
              backgroundColor: "#D8D8D8",
              borderRadius: "32px",
              marginRight: "10px",
            })}
          />

          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              marginLeft: "0px"
            })}
          >
            <p
              className={css({
                fontSize: "14px",
                lineHeight: "20px"
              })}
            >
              {author}
            </p>
            <p
              className={css({
                fontSize: "12px",
                lineHeight: "20px",
                opacity: "0.4"
              })}
            >
              {formattedPublishedDate}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCardPost;
