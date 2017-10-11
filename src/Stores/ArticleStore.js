import { observable, action, extendObservable } from "mobx";

class ArticleStore {
  constructor() {
    extendObservable(this, {
      articles: []
    });
  }

  setArticles = action(articles => {
    this.articles = observable(articles);
  });
}

const Store = (window.store = new ArticleStore());
export default Store;
