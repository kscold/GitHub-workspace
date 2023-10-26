//package com.company.smubook.controllers;
//
//import com.company.smubook.models.User;
//import com.company.smubook.services.UserService;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//
//@Controller
//public class FeedController {
//    private final UserService userService;
//
//    public FeedController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String home() {
//        return "home"; // 홈 페이지 JSP 파일로 리턴
//    }
//
//    @RequestMapping(value = "/signup", method = RequestMethod.GET)
//    public String signUp() {
//        return "signup"; // 회원 가입 페이지 JSP 파일로 리턴
//    }
//
//    @RequestMapping(value = "/signin", method = RequestMethod.GET)
//    public String signIn() {
//        return "signin"; // 로그인 페이지 JSP 파일로 리턴
//    }
//
//    @RequestMapping(value = "/feed", method = RequestMethod.GET)
//    public String feed(Model model) {
//        // 여기에 피드 관련 로직 추가
//        return "feed"; // 피드 페이지 JSP 파일로 리턴
//    }
//
//    @RequestMapping(value = "/friends", method = RequestMethod.GET)
//    public String friends(Model model) {
//        // 여기에 친구 관련 로직 추가
//        return "friends"; // 친구 목록 페이지 JSP 파일로 리턴
//    }
//}
