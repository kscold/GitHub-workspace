package com.company.smubook.services;

import java.util.List;

import com.company.smubook.models.Post;

public interface PostService {
    Post createPost(Post post);
    List<Post> getAllPosts();
    void deletePost(Post post);
}
