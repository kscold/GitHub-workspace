

package com.company.smubook.services;

import com.company.smubook.DAO.PostDAO;
import com.company.smubook.models.Post;
import com.company.smubook.models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class PostService {
	private List<Post> allPosts; // 모든 글 목록
	private final PostDAO postDAO;

	@Autowired
	public PostService(PostDAO postDAO) {
		this.postDAO = postDAO;
		this.allPosts = postDAO.findAllPosts();
	}

	public List<Post> getPostsForCurrentUser(User currentUser) {
		// 현재 사용자와 해당 사용자가 follow하는 사용자들의 글 목록을 가져오는 로직
		List<Post> postsForCurrentUser = new ArrayList<>();

		// 현재 사용자가 작성한 글 추가
		postsForCurrentUser.addAll(getPostsByUser(currentUser));

		// 현재 사용자가 follow하는 사용자들의 글 추가
		for (User followingUser : currentUser.getFollowing()) {
			postsForCurrentUser.addAll(getPostsByUser(followingUser));
		}

		// 글을 작성 시간 순서 역순으로 정렬
		postsForCurrentUser.sort(Comparator.comparing(Post::getTimestamp).reversed());

		return postsForCurrentUser;
	}

	public List<Post> getPostsByUser(User user) {
		// 해당 사용자가 작성한 글 목록을 가져오는 로직
		List<Post> postsByUser = new ArrayList<>();
		for (Post post : allPosts) {
			if (post.getAuthor().equals(user)) {
				postsByUser.add(post);
			}
		}
		return postsByUser;
	}

	public List<User> getFollowing(User currentUser) {
		// 현재 사용자가 follow하는 사용자 목록을 가져오는 로직
		return currentUser.getFollowing();
	}

	public int getNextPostId() {
		// 현재 저장된 게시물의 ID 중 최대값을 가져와서 1을 더하여 반환
		return allPosts.stream().mapToInt(Post::getId).max().orElse(0) + 1;
	}

	public Post createPost(Post newPost) {
		int nextPostId = getNextPostId();
		newPost.setId(nextPostId);
		postDAO.savePost(newPost); // PostDAO를 사용하여 게시글 저장

		// 업데이트된 글 목록을 다시 가져옴
		allPosts = postDAO.findAllPosts();
		System.out.println("글이 등록되었습니다: ID=" + newPost.getId() + ", Author=" + newPost.getAuthor().getUsername()
				+ ", Content=" + newPost.getContent());
		return newPost;
	}

	public List<Post> getAllPosts() {
		return allPosts;
	}
	
}
