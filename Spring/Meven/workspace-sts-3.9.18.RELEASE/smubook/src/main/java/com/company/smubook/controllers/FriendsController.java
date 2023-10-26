package com.company.smubook.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.company.smubook.models.User;
import com.company.smubook.services.UserService;

@Controller
public class FriendsController {

	private final UserService userService;

	@Autowired
	public FriendsController(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(value = "/friends", method = RequestMethod.GET)
	public String friends(Model model) {
		// 모든 사용자와 현재 사용자가 follow하는 사용자 목록을 가져오는 로직
		List<User> allUsers = userService.getAllUsers();
		List<User> following = userService.getFollowingForCurrentUser();

		model.addAttribute("allUsers", allUsers);
		model.addAttribute("following", following);

		return "friends"; // friends.jsp로 이동
	}

	// 추가적인 POST 요청을 처리할 메서드도 추가해야 합니다.
}
