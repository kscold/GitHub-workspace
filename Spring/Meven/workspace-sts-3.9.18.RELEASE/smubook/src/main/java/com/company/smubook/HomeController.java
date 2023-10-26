
package com.company.smubook;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.company.smubook.models.User;
import com.company.smubook.services.UserService;

@Controller
public class HomeController {

	private final UserService userService;

	@Autowired
	public HomeController(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		return "login";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String loginSubmit(@RequestParam("username") String username, @RequestParam("password") String password) {
		if (userService.authenticate(username, password)) {
			return "feed";
		} else {
			return "login_ng";
		}
	}

	@RequestMapping(value = "/signup", method = RequestMethod.GET)
	public String signUp() {
		return "signup";
	}


	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public String signUpSubmit(@RequestParam("username") String username, @RequestParam("password") String password,
			Model model) {
		// 사용자 이름(username)이 이미 존재하는지 확인
		if (userService.userExists(username)) {
			model.addAttribute("에러", "이미 있는 사용자이름입니다.");
			return "signup_ng";
		} else {
			// 회원 가입 처리 로직
			User newUser = new User(username, password);
			userService.signUp(newUser);
			return "signup_ok"; // 회원 가입 완료 페이지 JSP 파일로 리턴
		}
	}

//	@RequestMapping(value = "/signup", method = RequestMethod.POST)
//	public String signUpSubmit(@RequestParam("username") String username, @RequestParam("password") String password) {
//	    // 회원 가입 처리 로직
//	    User newUser = new User(username, password);
//	    userService.signUp(newUser);
//	    return "redirect:/feed"; // 회원 가입 완료 시 피드 페이지로 리다이렉트
//	}

//	@RequestMapping(value = "/feed", method = RequestMethod.GET)
//	public String feed() {
//		// 여기에 피드 관련 로직 추가
//		return "feed"; // 피드 페이지 JSP 파일로 리턴
//	}
//
//	@RequestMapping(value = "/friends", method = RequestMethod.GET)
//	public String friends() {
//		// 여기에 친구 관련 로직 추가
//		return "friends"; // 친구 목록 페이지 JSP 파일로 리턴
//	}

	
}
