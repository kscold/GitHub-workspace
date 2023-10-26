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

import java.util.Date;

public class Post {
	private String content;
	private User author;
	private Date timestamp;

	public Post(String content, User author) {
		this.content = content;
		this.author = author;
		this.timestamp = new Date(); // 글 작성 시간을 현재 시간으로 설정
	}

	public String getContent() {
		return content;
	}

	public User getAuthor() {
		return author;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	// 다른 필요한 메서드 및 데이터 멤버를 추가할 수 있습니다.
}
