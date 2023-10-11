package article.service;

import java.util.List;
import article.Article;
import article.dao.ArticleDao;

public class ArticleReadService {
	private ArticleDao articleDao;

	public ArticleReadService(ArticleDao articleDao) {
		this.articleDao = articleDao;
	}

	public List<Article> getAllArticles() {
		return articleDao.getAllArticles();
	}

	public Article getArticleById(int articleId) {
		return articleDao.getArticleById(articleId);
	}
}