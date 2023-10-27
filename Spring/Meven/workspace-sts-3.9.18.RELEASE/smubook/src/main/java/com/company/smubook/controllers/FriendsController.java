
package com.company.smubook.controllers;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.company.smubook.models.User;
import com.company.smubook.services.UserService;

@Controller
public class FriendsController {

	private final UserService userService;

	@Autowired
	public FriendsController(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping("/friends")
	public String friends(Model model) {
		User currentUser = userService.getCurrentUser();
		List<User> allUsers = new ArrayList<>(userService.getAllUsers()); // 기존 사용자 목록 복제

		// JSON 데이터를 읽어옴
		JSONArray existingUsers = userService.loadUsersFromJsonFile();

		// JSON 데이터를 allUsers에 추가 중복을 체크
		for (Object jsonUser : existingUsers) {
			JSONObject jsonObject = (JSONObject) jsonUser;
			String username = (String) jsonObject.get("username");
			boolean isUserInList = false;

			for (User user : allUsers) {
				if (user.getUsername().equals(username)) {
					isUserInList = true;
					break;
				}
			}

			if (!isUserInList) {
				User user = new User();
				user.setUsername(username);
				allUsers.add(user);
			}
		}

		List<User> following = userService.getFollowingForCurrentUser();

		model.addAttribute("allUsers", allUsers);
		model.addAttribute("following", following);
		model.addAttribute("currentUser", currentUser);

		return "friends";
	}

	@RequestMapping(value = "/follow", method = RequestMethod.POST)
	public String followUser(@RequestParam("usernameToFollow") String usernameToFollow, Model model) {
		User currentUser = userService.getCurrentUser();
		if (currentUser != null) {
			if (userService.followUser(usernameToFollow, currentUser.getUsername())) {
				// 팔로우 성공
				model.addAttribute("followSuccessMessage", "팔로우에 성공했습니다.");
			} else {
				// 팔로우 실패
				model.addAttribute("followErrorMessage", "팔로우에 실패했습니다.");
			}
		}

		return "redirect:/friends";
	}

	@RequestMapping(value = "/unfollow", method = RequestMethod.POST)
	public String unfollowUser(@RequestParam("usernameToUnfollow") String usernameToUnfollow, Model model) {
		User currentUser = userService.getCurrentUser();
		if (currentUser != null) {
			if (userService.unfollowUser(usernameToUnfollow, currentUser.getUsername())) {
				// 언팔로우 성공
				model.addAttribute("unfollowSuccessMessage", "언팔로우에 성공했습니다.");
			} else {
				// 언팔로우 실패
				model.addAttribute("unfollowErrorMessage", "언팔로우에 실패했습니다.");
			}
		}

		return "redirect:/friends";
	}

}
