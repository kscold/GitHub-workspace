
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
		if (userService.getCurrentUser() != null) {
			userService.logout(); // 로그인 상태에서 접속 시 로그아웃
		}
		return "login";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String loginSubmit(@RequestParam("username") String username, @RequestParam("password") String password,
			Model model) {
		if (userService.authenticate(username, password)) {
			// 로그인 성공 시 feed 페이지로 이동
			return "feed";
		} else {
			model.addAttribute("error", "유저이름이나 비밀번호 오류");
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
		String result = userService.signUp(new User(username, password), model);

		if ("signup_ng".equals(result)) {

			return "signup_ng";
		} else {
			// 회원 가입 후 로그인 페이지로 리다이렉트
			return "redirect:/";
		}
	}

}
