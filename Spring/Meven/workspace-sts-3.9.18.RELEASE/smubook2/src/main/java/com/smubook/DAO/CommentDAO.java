package com.smubook.DAO;

import com.smubook.models.Comment;

import java.util.List;

public interface CommentDAO {
	Comment saveComment(Comment comment);

	List<Comment> findAllComments();

	void deleteComment(Comment comment);
}
