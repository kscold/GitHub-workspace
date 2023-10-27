//package com.company.smubook.controllers;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import com.company.smubook.models.Post;
//import com.company.smubook.models.User;
//import com.company.smubook.services.PostService;
//import com.company.smubook.services.UserService;
//
//@Controller
//public class FeedController {
//
//	private final UserService userService;
//	private final PostService postService;
//
//	@Autowired
//	public FeedController(UserService userService, PostService postService) {
//		this.userService = userService;
//		this.postService = postService;
//	}
//
//	@RequestMapping(value = "/feed", method = RequestMethod.GET)
//	public String feed(Model model) {
//		// Feed에서 표시할 글들을 가져오는 로직
//		User currentUser = userService.getCurrentUser(); // 현재 사용자 가져오는 메서드를 호출해야 함
//		List<Post> posts = postService.getPostsForCurrentUser(currentUser);
//		model.addAttribute("posts", posts);
//
//		return "feed"; // feed.jsp로 이동
//	}
//
////	@RequestMapping(value = "/feed", method = RequestMethod.POST)
////	public String createPost(@ModelAttribute("currentUser") User currentUser, @RequestParam("content") String content) {
////		// 새로운 글을 작성하고 저장하는 로직 (PostService를 사용)
////		int nextPostId = postService.getNextPostId(); // 이 부분은 새로운 글의 ID를 가져오는 메서드여야 합니다
////		Post newPost = new Post(nextPostId, currentUser, content);
////		postService.createPost(newPost);
////
////		return "redirect:/feed";
////	}
//	
//	@RequestMapping(value = "/feed", method = RequestMethod.POST)
//	public String createPost(@ModelAttribute("currentUser") User currentUser, @RequestParam("content") String content) {
//	    // 새로운 글을 작성하고 저장하는 로직 (PostService를 사용)
//		Post newPost = new Post(0, currentUser, content); // 0은 임시 ID, 실제 ID는 PostService에서 생성
//	    postService.createPost(newPost);
//
//	    return "redirect:/feed";
//	}
//
//
////	@RequestMapping(value = "/feed/like", method = RequestMethod.POST)
////	public String likePost(@ModelAttribute("currentUser") User currentUser, @RequestParam("postId") int postId) {
////		// 글에 Like를 추가하는 로직 (PostService를 사용)
////		postService.likePost(currentUser, postId);
////
////		return "redirect:/feed";
////	}
////
////	@RequestMapping(value = "/feed/comment", method = RequestMethod.POST)
////	public String addComment(@ModelAttribute("currentUser") User currentUser, @RequestParam("postId") int postId,
////			@RequestParam("comment") String comment) {
////		// 글에 댓글을 추가하는 로직 (PostService를 사용)
////		postService.addComment(currentUser, postId, comment);
////
////		return "redirect:/feed";
////	}
////
////	@RequestMapping(value = "/feed/delete", method = RequestMethod.POST)
////	public String deletePost(@ModelAttribute("currentUser") User currentUser, @RequestParam("postId") int postId) {
////		// 글을 삭제하는 로직 (PostService를 사용)
////		postService.deletePost(currentUser, postId);
////
////		return "redirect:/feed";
////	}
////
////	// 추가적인 POST 요청을 처리할 메서드도 추가할 수 있습니다.
////
////	@RequestMapping(value = "/feed/logout", method = RequestMethod.GET)
////	public String logout(SessionStatus sessionStatus) {
////		// 로그아웃 처리 로직
////		sessionStatus.setComplete(); // 세션 정보 제거
////
////		return "redirect:/";
////	}
//}


package com.company.smubook.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

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
        User currentUser = userService.getCurrentUser();
//        List<Post> posts = postService.getPostsForCurrentUser(currentUser);
        List<Post> posts = postService.getAllPosts(); 
        model.addAttribute("posts", posts);

        return "feed";
    }

    @RequestMapping(value = "/feed", method = RequestMethod.POST)
    public String createPost(@ModelAttribute("currentUser") User currentUser, @RequestParam("content") String content) {
        Post newPost = new Post(0, currentUser, content);
        postService.createPost(newPost);

        return "redirect:/feed";
    }
}

