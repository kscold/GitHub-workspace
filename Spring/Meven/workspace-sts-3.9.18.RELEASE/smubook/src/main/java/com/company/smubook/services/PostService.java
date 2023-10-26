//package com.company.smubook.services;
//
//import java.util.List;
//
//import com.company.smubook.models.Post;
//
//public interface PostService {
//    Post createPost(Post post);
//    List<Post> getAllPosts();
//    void deletePost(Post post);
//}


package com.company.smubook.services; 

import com.company.smubook.models.Post;
import com.company.smubook.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class PostService {
    private List<Post> allPosts; // 모든 글 목록

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

    // 다른 메서드 및 데이터 관련 로직도 추가할 수 있습니다.
}
