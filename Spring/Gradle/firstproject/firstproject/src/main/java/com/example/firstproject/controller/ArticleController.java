package com.example.firstproject.controller;

import com.example.firstproject.dto.ArticleForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;

@Slf4j
@Controller
public class ArticleController {

    @Autowired // 스프링 부트가 미리 생성해 놓은 리파지터리 객체 주입(DI)
    private ArticleRepository articleRepository;

    @GetMapping("/articles/new")
    public String newArticleForm() {
        return "articles/new";
    }

    @PostMapping("/articles/create")
    public String createArticle(ArticleForm form) {
        System.out.println(form.toString());

        // 1. DTO를 엔티티로 변환
        Article article = form.toEntity();
        log.info(article.toString());
        // System.out.println(article.toString()); // DTO가 엔티티로 잘 변환되는지 확인 출력

        // 2. 리파지터리로 엔티티를 DB에 저장
        Article saved = articleRepository.save(article);
        log.info(saved.toString());
        // System.out.println(saved); // article이 DB에 잘 저장되는지 확인 출력

        return "redirect:/articles/" + saved.getId();
    }

    @GetMapping("/articles/{id}") // 상세페이지 메서드
    public String show(@PathVariable Long id, Model model) { // 매개변수로 id 받아 오기
        log.info("id = " + id); // id를 잘 받았는지 확인하는 로그 찍기
        // 1. id를 조회해 데이터 가져오기
        Article articleEntity = articleRepository.findById(id).orElse(null);
        // 2. 모델에 데이터 등록하기
        model.addAttribute("article", articleEntity);
        // 3. 뷰 페이지 반환하기
        return "articles/show"; // 목록으로 돌아가기 링크를 넣을 뷰 파일 확인
    }

    @GetMapping("/articles")
    public String index(Model model) {
        // 1. 모든 데이터 가져오기
        ArrayList<Article> articleEntitiyList = articleRepository.findAll();
        // 2. 모델에 데이터 등록하기
        model.addAttribute("articleList", articleEntitiyList);
        // 3. 사용자에게 보여 줄 뷰 페이지 설정하기
        return "articles/index";
    }

    @GetMapping("/articles/{id}/edit")
    public String edit(@PathVariable Long id, Model model) {
        // 수정할 데이터 가져오기
        Article articleEntity = articleRepository.findById(id).orElse(null);
        // 모델에 데이터 등록하기
        model.addAttribute("article", articleEntity);
        // 뷰 페이지 설정하기
        return "articles/edit";
    }

    @PostMapping("/articles/update")
    public String update(ArticleForm form) { // 매개변수로 DTO를 받아오기
        log.info(form.toString());
        // 1. DTO를 엔티티로 변환하기
        Article articleEntitiy = form.toEntity(); // DTO(form)를 엔티티(articleEntity)로 변환하기
        log.info(articleEntitiy.toString()); // 엔티티로 잘 변환됐는지 로그 찍기
        // 2. 엔티티를 DB를 저장하기
        // 2-1. DB에서 기존 데이터 가져오기
        Article target = articleRepository.findById(articleEntitiy.getId()).orElse(null);
        // id에 맞는 데이터가 있으면 데이터를 반환하고 null이면 null를 반환

        // 2-2. 기존 데이터 값을 갱신하기
        if (target != null) { // 데이터가 이미 존재하면
            articleRepository.save(articleEntitiy); // 엔티티를 DB에 저장(갱신)
        }

        // 3. 수정 결과 페이지로 리다이렉트하기
        return "redirect:/articles/" + articleEntitiy.getId();
    }

    @GetMapping("/articles/{id}/delete")
    public String delete(@PathVariable Long id, RedirectAttributes rttr) {
        log.info("삭제 요청이 들어왔습니다!!");
        // 1. 삭제할 대상 가져오기
        Article target = articleRepository.findById(id).orElse(null);
        log.info(target.toString());
        // 2. 대상 엔티티 삭제하기
        if (target != null) {
            articleRepository.delete(target);
            rttr.addFlashAttribute("msg", "삭제됐습니다!");
        }

        // 3. 결과 페이지로 리다이렉트하기
        return "redirect:/articles";
    }

}
