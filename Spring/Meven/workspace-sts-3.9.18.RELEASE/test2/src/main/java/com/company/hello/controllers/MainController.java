package com.company.hello.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/smubook")
public class MainController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home() {
        return "login";
    }

    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signUp() {
        return "signup"; // 회원 가입 페이지 JSP 파일로 리턴
    }

    @RequestMapping(value = "/feed", method = RequestMethod.GET)
    public String feed() {
        // 여기에 피드 관련 로직 추가
        return "feed"; // 피드 페이지 JSP 파일로 리턴
    }

    @RequestMapping(value = "/friends", method = RequestMethod.GET)
    public String friends() {
        // 여기에 친구 관련 로직 추가
        return "friends"; // 친구 목록 페이지 JSP 파일로 리턴
    }
}
