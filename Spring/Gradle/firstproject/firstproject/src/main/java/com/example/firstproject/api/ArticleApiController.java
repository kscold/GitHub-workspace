/*
package com.example.firstproject.api;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class ArticleApiController {
    @Autowired // 게시글 리파지토리 자동 주입
    private ArticleRepository articleRepository;

    // GET
    @GetMapping("/api/articles") // 모든 게시글 정보 반환
    public List<Article> index() {
        return articleRepository.findAll(); // GET이 오면 모든 게시글 정보를 반환
    }

    @GetMapping("/api/articles/{id}") // 특정 게시글 반환
    public Article show(@PathVariable Long id) { // 단일 게시글 조회를 show 메서드로 작성
        return articleRepository.findById(id).orElse(null);
    }

    // POST
    @PostMapping("/api/articles") // // 게시글 등록
    public Article create(@RequestBody ArticleForm dto) { // POST로 게시글을 생성하는 create 메서드
        Article article = dto.toEntity();
        return articleRepository.save(article);
    }

    // PATCH
    @PatchMapping("/api/articles/{id}") // 게시글 수정
    public ResponseEntity<Article> update(@PathVariable Long id, @RequestBody ArticleForm dto) {
        // 1. DTO -> 엔티티 변환하기
        Article article = dto.toEntity(); // 엔티티로 변환(수정할 데이터)
        log.info("id: {}, article: {}", id, article.toString());

        // 2. 타깃 조회하기
        Article target = articleRepository.findById(id).orElse(null); // 기존 데이터

        // 3. 잘못된 요청 처리하기
        if (target == null || id != article.getId()) {
            // 400, 잘못된 요청 응답!
            log.info("잘못된 요청! id: {}, article: {}", id, article.toString());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // 404를 띄우고 body에 데이터는 null
        }

        // 4. 업데이트 및 정상 응답(200)하기
        target.patch(article); // target으로 article dto의 업데이트 형식을 판단
        Article updated = articleRepository.save(target); // target을 반환
        return ResponseEntity.status(HttpStatus.OK).body(updated);
    }

    // DELETE
    @DeleteMapping("/api/articles/{id}")
    public ResponseEntity<Article> delete(@PathVariable Long id) {
        // 1. 대상 찾기
        Article target = articleRepository.findById(id).orElse(null);
        // 2. 잘못된 요청 처리하기
        if (target == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        // 3. 대상 삭제하기
        articleRepository.delete(target);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
*/

package com.example.firstproject.api;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Service를 이용한 컨트롤러
@Slf4j
@RestController
public class ArticleApiController {
    @Autowired
    private ArticleService articleService;

    // GET
    @GetMapping("/api/articles") // 모든 게시글 정보 반환
    public List<Article> index() {
        return articleService.index(); // GET이 오면 모든 게시글 정보를 반환
    }

    @GetMapping("/api/articles/{id}")
    public Article show(@PathVariable Long id) {
        return articleService.show(id);
    }

    // POST
    @PostMapping("/api/articles")
    public ResponseEntity<Article> create(@RequestBody ArticleForm dto) {
        Article created = articleService.create(dto);

        return (created != null) ?
                ResponseEntity.status(HttpStatus.OK).body(created) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // PATCH
    @PatchMapping("/api/articles/{id}")
    public ResponseEntity<Article> update(@PathVariable Long id, @RequestBody ArticleForm dto) {
        Article updated = articleService.update(id, dto);

        return (updated != null) ?
                ResponseEntity.status(HttpStatus.OK).body(updated) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // DELETE
    public ResponseEntity<Article> delete(@PathVariable Long id) {
        Article deleted = articleService.delete(id);
        return (deleted != null) ?
                ResponseEntity.status(HttpStatus.NO_CONTENT).build() :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}

