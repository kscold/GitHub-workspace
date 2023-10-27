
package com.company.smubook.DAO;

import java.util.List;
import java.util.ArrayList;
import com.company.smubook.models.Post;
import org.springframework.stereotype.Repository; // 추가

@Repository
public class PostDAO {
	private List<Post> postDB;

	public PostDAO() {
		this.postDB = new ArrayList<>();
	}

	public List<Post> findAllPosts() {
		return postDB;
	}

	public Post savePost(Post post) {
		postDB.add(post);
		return post;
	}

	public void deletePost(Post post) {
		postDB.remove(post);
	}

	public int generateNextPostId() {
		int maxId = 0;
		for (Post post : postDB) {
			if (post.getId() > maxId) {
				maxId = post.getId();
			}
		}
		return maxId + 1;
	}
}
