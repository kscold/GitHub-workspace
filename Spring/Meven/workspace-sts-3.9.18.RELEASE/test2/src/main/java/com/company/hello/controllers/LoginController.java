package com.company.hello.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.smubook.services.UserServiceInterface;

@Controller
public class LoginController {
    private final UserServiceInterface userService;

    public LoginController(UserServiceInterface userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/login")
    public String login() {
        return "login"; // 로그인 페이지 JSP 파일로 리턴
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String loginSubmit(@RequestParam("username") String username, @RequestParam("password") String password) {
        if (userService.authenticate(username, password)) {
            return "login_ok"; // 로그인 성공 페이지 JSP 파일로 리턴
        } else {
            return "login_ng"; // 로그인 실패 페이지 JSP 파일로 리턴
        }
    }
}

