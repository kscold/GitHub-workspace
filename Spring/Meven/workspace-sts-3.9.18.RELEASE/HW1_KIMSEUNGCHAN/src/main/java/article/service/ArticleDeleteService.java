package article.service;

import article.dao.ArticleDao;

public class ArticleDeleteService {
	private ArticleDao articleDao;

	public ArticleDeleteService(ArticleDao articleDao) {
		this.articleDao = articleDao;
	}

	public void deleteArticle(int articleId) {
		articleDao.deleteArticle(articleId);
	}
}
