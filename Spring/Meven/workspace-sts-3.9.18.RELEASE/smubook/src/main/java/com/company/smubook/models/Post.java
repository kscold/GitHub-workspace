//package com.company.smubook.models;
//
//public class Post {
//	private String content;
//	private User author;
//
//	public String getContent() {
//		return content;
//	}
//
//	public void setContent(String content) {
//		this.content = content;
//	}
//
//	public User getAuthor() {
//		return author;
//	}
//
//	public void setAuthor(User author) {
//		this.author = author;
//	}
//
//}

package com.company.smubook.models; 

import java.time.LocalDateTime;
import java.util.Date;

public class Post {
	private int id;
	private User author;
	private String content;
//	private Date timestamp;
	private LocalDateTime timestamp;
	private int likes;
	
	public Post() {
        // 기본 생성자
    }

	public Post(int id, User author, String content) {
		this.id = id;
		this.author = author;
		this.content = content;
		this.timestamp = LocalDateTime.now(); // 글 생성 시간을 현재 시간으로 설정
		this.likes = 0; // 초기 좋아요 수를 0으로 설정
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getAuthor() {
		return author;
	}

	public String getContent() {
		return content;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public int getLikes() {
		return likes;
	}

	public void incrementLikes() {
		likes++;
	}

	public void decrementLikes() {
		likes--;
	}

	// 다른 필요한 메서드 및 데이터 멤버를 추가할 수 있습니다.
}
