package article.service;

import article.Article;
import article.dao.ArticleDao;

public class ArticleCreateService {
	private ArticleDao articleDao;

	public ArticleCreateService(ArticleDao articleDao) {
		this.articleDao = articleDao;
	}

	public void createArticle(Article article) {
		articleDao.createArticle(article);
	}
}