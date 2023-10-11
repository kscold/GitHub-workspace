
package article.dao;

import article.Article;

import java.util.ArrayList;
import java.util.List;

public class ArticleDaoImpl implements ArticleDao {
	private List<Article> articles = new ArrayList<>();
	private int nextArticleId = 1; // 다음 게시글 번호를 위한 변수

	@Override
	public List<Article> getAllArticles() {
		return articles;
	}

	@Override
	public Article getArticleById(int articleId) {
		for (Article article : articles) {
			if (article.getArticleId() == articleId) {
				return article;
			}
		}
		return null; // 해당 아이디의 게시글을 찾을 수 없을 때
	}

	@Override
	public void createArticle(Article article) {
		article.setArticleId(nextArticleId++);
		articles.add(article);
	}

	@Override
	public void updateArticle(Article updatedArticle) {
		int articleId = updatedArticle.getArticleId();
		for (int i = 0; i < articles.size(); i++) {
			Article existingArticle = articles.get(i);
			if (existingArticle.getArticleId() == articleId) {
				articles.set(i, updatedArticle);
				return;
			}
		}
	}

	@Override
	public void deleteArticle(int articleId) {
		articles.removeIf(article -> article.getArticleId() == articleId);
	}
}
