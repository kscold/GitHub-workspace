package com.company.smubook.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.company.smubook.models.Post;
import com.company.smubook.models.User;
import com.company.smubook.services.PostService;
import com.company.smubook.services.UserService;

@Controller
public class FeedController {

	private final UserService userService;
	private final PostService postService;

	@Autowired
	public FeedController(UserService userService, PostService postService) {
		this.userService = userService;
		this.postService = postService;
	}

	@RequestMapping(value = "/feed", method = RequestMethod.GET)
	public String feed(Model model) {
		// Feed에서 표시할 글들을 가져 올 로직
		User currentUser = userService.getCurrentUser();
		List<Post> posts = postService.getPostsForCurrentUser(currentUser);
		model.addAttribute("posts", posts);

		return "feed"; 
	}

}
