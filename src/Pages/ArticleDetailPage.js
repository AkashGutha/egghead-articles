import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";

import ReactMarkdown from "react-markdown";
import ArticleHeader from "./../Components/ArticleHeader";
import SmallCardPost from "./../Components/SmallCardPost";

const ArticleDetailPage = observer(
  class ArticleDetailPageCompoenet extends Component {
    render() {
      const article = this.props.store.articles[0];

      if (article === undefined) {
        return <h1> loading... </h1>;
      }

      const { body } = article.content;

      return (
        <div
          className={css({
            marginBottom: "64px"
          })}
        >
          <ArticleHeader />

          <div
            className={css({
              marginTop: "72px",
              marginLeft: "72px",
              marginRight: "72px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            })}
          >
            <div
              className={css({
                width: "600px"
              })}
            >
              <ReactMarkdown source={body} />
            </div>
          </div>

          <div
            className={css({
              marginTop: "72px",
              height: "300px",
              backgroundColor: "#eee"
            })}
          >
            .
          </div>

          <div
            className={css({
              marginTop: "100px",
              display: "flex",
              justifyContent: "center"
            })}
          >
            <div
              className={css({
                width: "1200px"
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  paddingRight: "10px"
                })}
              >
                <h1>More posts tagged React</h1>
                <h3>MORE -></h3>
              </div>

              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between"
                })}
              >
                <SmallCardPost article={article} />
                <SmallCardPost article={article} />
                <SmallCardPost article={article} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default ArticleDetailPage;
