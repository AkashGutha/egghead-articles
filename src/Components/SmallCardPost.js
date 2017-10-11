import React, { Component } from "react";
import { css } from "glamor";

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
          padding: "10px",
          width: "370px",
          ":hover": {
            backgroundColor: "white",
            boxShadow: "0px 0px 20px skyblue",
            transform: "scale(1.1, 1.05)",
            zIndex: "2",
            transition: "0.2s ease-out"
          }
        })}
      >
        <div
          className={css({
            height: "240px",
            width: "370px",
            opacity: "0.1",
            backgroundColor: "black"
          })}
        />

        <p
          className={css({
            marginTop: "24px",
            fontWeight: "bold",
            letterSpacing: "3px",
            lineHeight: "24px",
            opacity: "0.5",
            fontSize: "12px"
          })}
        >
          {category.toUpperCase()}
        </p>
        <p
          className={css({
            fontSize: "1.5em"
          })}
        >
          {content.title}
        </p>
        <p
          className={css({
            height: "58px",
            marginTop: "7px",
            fontWeight: "thin",
            opacity: "0.5"
          })}
        >
          {content.subtitle}
        </p>

        <div
          className={css({
            display: "flex",
            flexDirection: "row"
          })}
        >
          <div
            className={css({
              height: "40px",
              width: "40px",
              border: "1px solid #D8D8D8",
              backgroundColor: "#D8D8D8",
              borderRadius: "32px",
              marginRight: "10px"
            })}
          />

          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              marginLeft: "12px"
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
