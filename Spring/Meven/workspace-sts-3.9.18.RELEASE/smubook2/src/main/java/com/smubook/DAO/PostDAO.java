package com.smubook.DAO;

import com.smubook.models.Post;

import java.util.List;

public interface PostDAO {
    Post savePost(Post post);
    List<Post> findAllPosts();
    void deletePost(Post post);
}