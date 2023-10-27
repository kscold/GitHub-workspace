//package com.company.smubook.models;
//
//public class User {
//	private String username;
//	private String password;
//
//	public User(String username, String password) {
//        this.username = username;
//        this.password = password;
//    }
//
//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//}

package com.company.smubook.models;

import java.util.ArrayList;
import java.util.List;

public class User {
	private String username;
	private String password;
	private List<User> following;
	private String id;

	
	public User(String username, String password) {
		this.username = username;
		this.password = password;
		this.following = new ArrayList<>(); // 사용자가 팔로우하는 다른 사용자 목록
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<User> getFollowing() {
		return following;
	}

	public void follow(User userToFollow) {
		if (!following.contains(userToFollow)) {
			following.add(userToFollow);
		}
	}

	public void unfollow(User userToUnfollow) {
		following.remove(userToUnfollow);
	}

	// 다른 필요한 메서드 및 데이터 멤버를 추가할 수 있습니다.
}
