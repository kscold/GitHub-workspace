//package com.company.smubook.controllers;
//
//import com.company.smubook.models.User;
//import com.company.smubook.services.UserService;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//
//@Controller
//public class UserController {
//	private final UserService userService;
//
//	public UserController(UserService userService) {
//		this.userService = userService;
//	}
//
////	@RequestMapping(value = "/signup", method = RequestMethod.GET)
////	public String signUp() {
////		return "signup";
////	}
//
////	@RequestMapping(value = "/user/signup", method = RequestMethod.POST)
////	public String signUpSubmit(@RequestParam("username") String username, @RequestParam("password") String password) {
////	    // 회원 가입 처리 로직
////	    User newUser = new User(username, password);
////	    userService.signUp(newUser);
////
////	    return "signup_ok"; // 회원 가입 완료 페이지 JSP 파일로 리턴
////	}
//
//	@RequestMapping(value = "/login", method = RequestMethod.GET)
//	public String login() {
//		return "login";
//	}
//
//	@RequestMapping(value = "user/login", method = RequestMethod.POST)
//	public String loginSubmit(@RequestParam("username") String username, @RequestParam("password") String password) {
//		if (userService.authenticate(username, password)) {
//			return "login_ok";
//		} else {
//			return "login_ng";
//		}
//	}
//}