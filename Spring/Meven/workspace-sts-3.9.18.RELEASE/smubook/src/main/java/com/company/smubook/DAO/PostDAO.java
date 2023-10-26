package com.company.smubook.DAO;

import java.util.List;

import com.company.smubook.models.Post;

public interface PostDAO {
    Post savePost(Post post);
    List<Post> findAllPosts();
    void deletePost(Post post);
}