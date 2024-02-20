package org.example.mvc.controller;

import org.example.mvc.model.User;
import org.example.mvc.repository.UserRepository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserCreateController implements Controller { // 유저 정보를 생성하는 메서드 컨트롤러
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        UserRepository.save(new User(request.getParameter("userId"), request.getParameter("name")));

        return "redirect:/users"; // users 페이지 리다이렉트
    }

}
