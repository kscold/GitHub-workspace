package com.company.smubook.DAO;

import java.util.List;

import com.company.smubook.models.Comment;

public interface CommentDAO {
	Comment saveComment(Comment comment);

	List<Comment> findAllComments();

	void deleteComment(Comment comment);
}
