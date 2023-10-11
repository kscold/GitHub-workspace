package article.dao;

import article.Article;
import java.util.List;

public interface ArticleDao {
	List<Article> getAllArticles();

	Article getArticleById(int articleId);

	void createArticle(Article article);

	void updateArticle(Article article);

	void deleteArticle(int articleId);
}
