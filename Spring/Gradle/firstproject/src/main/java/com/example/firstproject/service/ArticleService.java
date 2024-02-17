package com.example.firstproject.service;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service // 서비스 객체 생성
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository; // 게시글 리파지터리 객체 주입


    public List<Article> index() {
        return articleRepository.findAll();
    }

    public Article show(Long id) {
        return articleRepository.findById(id).orElse(null);
    }

    public Article create(ArticleForm dto) {
        Article article = dto.toEntity();
        if (article.getId() != null) { // POST를 통한 생성에서 수정을 방지하기 위해 getId가 null이면 null을 반환하여 삼항연산자를 실패로 만듬
            return null;
        }

        return articleRepository.save(article);
    }


    // PATCH
    public Article update(Long id, ArticleForm dto) {
        // 1. DTO -> 엔티티 변환하기
        Article article = dto.toEntity();
        log.info("id: {},article: {}", id, article.toString()); // 엔티티로 잘 바뀌었는지 확인

        // 2. 타깃 조회하기
        Article target = articleRepository.findById(id).orElse(null);

        // 3. 잘못된 요청 처리하기
        if (target == null || id != article.getId()) {
            log.info("잘못된 요청! id: {}, article: {}", id, article.toString());
            return null; // 응답은 컨트롤러가 함으로 null를 반환
        }

        // 4. 업데이트하기
        target.patch(article); // title과 content 둘 중 하나만 있어도 업데이트할 수 있는 생성자 메서드
        Article updated = articleRepository.save(target);
        return updated;
    }


    public Article delete(Long id) {
        // 1. 대상 찾기
        Article target = articleRepository.findById(id).orElse(null);

        // 2. 잘못된 요청 처리하기
        if (target == null) {
            return null;
        }

        // 3. 대상 삭제하기
        articleRepository.delete(target);
        return target;
    }

    @Transactional
    public List<Article> createArticles(List<ArticleForm> dtos) {
        // 1. dto 묶음을 엔티티 묶음으로 변환하기
        List<Article> articlesList = dtos.stream()
                .map(dto -> dto.toEntity())
                .collect(Collectors.toList()); // 스트림을 리스트로 변환한다.

        // 2. 엔티티 묶음을 DB에 저장하기
        articlesList.stream() // 위에서 만든 articlesList를 forEach를 통해 article 하나씩 DB에 저장
                .forEach(article -> articleRepository.save(article));

        // 3. 강제 예외 발생시키기
        articleRepository.findById(-1L) // Long형식 -1인 Id 찾기(즉, 강제로 예외상황 발생), 테스트 코드라고 생각
                .orElseThrow(() -> new IllegalArgumentException("결제 실패!")); // 예외 에러 처리 메세지

        // 4. 결과 값 반환하기
        return articlesList;
    }
}
