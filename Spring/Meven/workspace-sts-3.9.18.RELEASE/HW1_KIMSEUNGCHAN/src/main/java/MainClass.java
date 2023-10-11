
import article.Article;
import article.service.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ArticleCreateService createService = (ArticleCreateService) context.getBean("articleCreateService");
		ArticleReadService readService = (ArticleReadService) context.getBean("articleReadService");
		ArticleUpdateService updateService = (ArticleUpdateService) context.getBean("articleUpdateService");
		ArticleDeleteService deleteService = (ArticleDeleteService) context.getBean("articleDeleteService");
		ArticlePrintService printService = (ArticlePrintService) context.getBean("articlePrintService");

		// 게시글 생성
		Article newArticle = new Article();
		newArticle.setTitle("스프링");
		newArticle.setAuthor("김승찬");
		newArticle.setContent("메이븐");
		createService.createArticle(newArticle);

		Article anotherArticle = new Article();
		anotherArticle.setTitle("스프링2");
		anotherArticle.setAuthor("홍길동");
		anotherArticle.setContent("그래들");
		createService.createArticle(anotherArticle);

		// 모든 게시글 조회
		System.out.println("-----------------------------------모든 게시글 조회-----------------------------------");
		for (Article article : readService.getAllArticles()) {
			printService.printArticle(article);
		}

		// 게시글 갱신 (ID를 사용하여 특정 게시글 수정)
		int articleIdToUpdate = newArticle.getArticleId(); // 수정할 게시글 ID
		Article articleToUpdate = readService.getArticleById(articleIdToUpdate);
		if (articleToUpdate != null) {
			articleToUpdate.setTitle("수정된 스프링");
			articleToUpdate.setAuthor("찬승김");
			articleToUpdate.setContent("수정된 메이븐");
			updateService.updateArticle(articleToUpdate);
			System.out.println("-----------------------------------게시글 갱신-----------------------------------");
			printService.printArticle(articleToUpdate);
		} else {
			System.out.println("게시글을 찾을 수 없어 갱신할 수 없습니다.");
		}

		// 모든 게시글 조회
		System.out.println("-----------------------------------모든 게시글 조회-----------------------------------");
		for (Article article : readService.getAllArticles()) {
			printService.printArticle(article);
		}

		// 게시글 삭제 (ID를 사용하여 특정 게시글 삭제)
		int articleIdToDelete = anotherArticle.getArticleId(); // 삭제할 게시글 ID
		deleteService.deleteArticle(articleIdToDelete);
		System.out.println("-----------------------------------게시글 삭제-----------------------------------");

		// 모든 게시글 조회
		System.out.println("-----------------------------------모든 게시글 조회-----------------------------------");
		for (Article article : readService.getAllArticles()) {
			printService.printArticle(article);
		}
	}
}
