package com.smubook.services;

import com.smubook.models.Post;

import java.util.List;

public interface PostService {
    Post createPost(Post post);
    List<Post> getAllPosts();
    void deletePost(Post post);
}
