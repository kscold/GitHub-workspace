package article.service;

import article.Article;
import article.dao.ArticleDao;

public class ArticleUpdateService {
	private ArticleDao articleDao;

	public ArticleUpdateService(ArticleDao articleDao) {
		this.articleDao = articleDao;
	}

	public void updateArticle(Article article) {
		articleDao.updateArticle(article);
	}
}
