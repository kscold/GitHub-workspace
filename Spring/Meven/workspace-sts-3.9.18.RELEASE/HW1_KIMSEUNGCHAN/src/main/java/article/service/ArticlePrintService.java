package article.service;

import article.Article;

public class ArticlePrintService {
	public void printArticle(Article article) {
		if (article != null) {
			System.out.println("게시글 번호: " + article.getArticleId());
			System.out.println("게시글 작성자: " + article.getAuthor());
			System.out.println("게시글 제목: " + article.getTitle());
			System.out.println("게시글 내용: " + article.getContent());
		} else {
			System.out.println("게시글을 찾을 수 없습니다.");
		}
	}
}
