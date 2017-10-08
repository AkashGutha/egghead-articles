import { extendObservable } from "mobx";
import ArticlesData from "./../Data/Articles.json";

export default class ArticleStore {

  constructor() {
    extendObservable(this, {
      articles: []
    });
  }

  getArticles = options => {
    if (options !== undefined) {
    } else {
      this.articles = ArticlesData;
      console.log(this.articles);
    }
  };
}
