import React, { Component } from "react";
import { css } from "glamor";

class SmallCardPost extends Component {
  truncate = (data, max_letters) => {
    if (data.length > max_letters) {
      return data.slice(0, max_letters) + "...";
    } else {
      return data;
    }
  };

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
          width: "370px"
          // ":hover": {
          //   backgroundColor: "white",
          //   boxShadow: "0px 0px 20px skyblue",
          //   border: "1px solid skyblue",
          //   transform: "scale(1.05, 1.05)",
          //   zIndex: "2",
          //   transition: "0.2s ease-out"
          // }
        })}
      >
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
            height: "175px",
            width: "370px",
            marginTop: "10px",
            opacity: "0.5",
            textAlign: "justify",
            lineHeight: "24px"
          })}
        >
          {this.truncate(content.body, 300)}
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
              alignSelf: "center"
            })}
          >
            <p>{author}</p>
            <p>{formattedPublishedDate}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCardPost;
