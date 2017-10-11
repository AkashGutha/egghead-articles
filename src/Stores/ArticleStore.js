import { observable, extendObservable } from "mobx";

class ArticleStore {
  constructor() {
    extendObservable(this, {
      articles: []
    });
  }

  setArticles = articles => {
    this.articles.push(observable(articles));
  };
}

const store = new ArticleStore();
export default store;
