import ArticlesData from "./../Data/Articles.json";
import moment from "moment";

export const loadArticles = options => {
  if (options === undefined) {
    return new Promise((resolve, reject) => {
      let articles = ArticlesData.map(article => {
        const date = moment(new Date(article.publishedAt));
        const formattedDate = date.format("DD MMM YYYY");
        article.formattedPublishedDate = formattedDate;
        return article;
      });
      setTimeout(() => resolve(articles), 2000);
    });
  }
};
