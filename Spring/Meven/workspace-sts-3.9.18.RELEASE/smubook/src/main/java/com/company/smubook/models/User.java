
package com.company.smubook.models;

import java.util.ArrayList;
import java.util.List;

public class User {
	private String username;
	private String password;
	private List<User> following;
	private String id;
	private boolean follow;

	public User() {
		this.following = new ArrayList<>();
		this.follow = false;
	}

	public User(String username, String password) {
		this();
		this.username = username;
		this.password = password;
	}

	public User(String id, String username, String password, boolean follow) {
		this();
		this.id = id;
		this.username = username;
		this.password = password;
		this.follow = follow;
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

	public boolean getFollow() {
		return follow;
	}

	public void setFollow(boolean follow) {
		this.follow = follow;
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

}
