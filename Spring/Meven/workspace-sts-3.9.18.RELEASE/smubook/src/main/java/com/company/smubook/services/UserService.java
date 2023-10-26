package com.company.smubook.services;

import com.company.smubook.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService implements UserServiceInterface {
	private Map<String, User> users = new HashMap<>();
	private User currentUser; // 현재 로그인한 사용자를 저장할 변수

	@Override
	public void signUp(User user) {
		users.put(user.getUsername(), user);
		// 콘솔에 회원 가입 정보 출력
		System.out.println("User Signed Up: " + user.getUsername());
	}

	@Override
	public boolean authenticate(String username, String password) {
		User user = users.get(username);
		return user != null && user.getPassword().equals(password);
	}

	public boolean userExists(String username) {
		return users.containsKey(username);
	}

	public List<User> getAllUsers() {
		// 모든 사용자 목록을 가져오는 로직
		return new ArrayList<>(users.values());
	}

	public List<User> getFollowingForCurrentUser() {
		if (currentUser == null) {
			return new ArrayList<>();
		}
		// 현재 사용자가 follow하는 사용자 목록을 가져오는 로직
		return currentUser.getFollowing();
	}

	public void login(User user) {
		// 로그인 처리 로직
		currentUser = user; // 현재 사용자를 설정
	}

	public void logout() {
		// 로그아웃 처리 로직
		currentUser = null; // 현재 사용자를 null로 설정
	}

	public User getCurrentUser() {
		return currentUser;
	}
}
