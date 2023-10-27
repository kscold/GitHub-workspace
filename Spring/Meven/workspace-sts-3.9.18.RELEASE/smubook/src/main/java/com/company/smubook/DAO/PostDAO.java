//package com.company.smubook.DAO;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//
//import com.company.smubook.models.Post;
//
//public class PostDAO {
//    private Map<Integer, Post> postDB;
//
//    public PostDAO(Map<Integer, Post> postDB) {
//        this.postDB = postDB;
//    }
//
//    public void insertPost(Post post) {
//        int postId = generateNextPostId();
//        post.setId(postId);
//        postDB.put(postId, post);
//    }
//
//    public List<Post> selectAllPosts() {
//        return new ArrayList<>(postDB.values());
//    }
//
//    public Post selectPost(int postId) {
//        return postDB.get(postId);
//    }
//
//    public void deletePost(int postId) {
//        postDB.remove(postId);
//    }
//
//    // 기타 필요한 메서드 구현 가능
//}


//package com.company.smubook.DAO;
//
//import java.util.List;
//import java.util.ArrayList;
//
//import com.company.smubook.models.Post;
//
//public class PostDAO {
//    private List<Post> postDB;
//
//    public PostDAO() {
//        this.postDB = new ArrayList<>();
//    }
//
//    public List<Post> findAllPosts() {
//        return postDB;
//    }
//
//    public Post savePost(Post post) {
//        postDB.add(post);
//        return post;
//    }
//
//    public void deletePost(Post post) {
//        postDB.remove(post);
//    }
//
//    public int generateNextPostId() {
//        int maxId = 0;
//        for (Post post : postDB) {
//            if (post.getId() > maxId) {
//                maxId = post.getId();
//            }
//        }
//        return maxId + 1;
//    }
//}

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

