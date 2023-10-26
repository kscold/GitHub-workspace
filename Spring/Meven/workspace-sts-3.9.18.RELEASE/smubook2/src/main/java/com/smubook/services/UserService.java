//package com.smubook.services;
//
//import com.smubook.models.User;
//import com.smubook.DAO.UserDAO;
//
//import java.util.Map;
//
//public class UserService {
//	private UserDAO userDAO;
//
//	public UserService(UserDAO userDAO) {
//		this.userDAO = userDAO;
//	}
//
//	public void signUp(User user) {
//		userDAO.insertUser(user);
//	}
//
//	public User signIn(String username, String password) {
//		return userDAO.selectUser(username, password);
//	}
//
//	public boolean isUsernameTaken(String username) {
//		return userDAO.isUsernameTaken(username);
//	}
//
//	public Map<String, User> getAllUsers() {
//		return userDAO.getAllUsers();
//	}
//
//	public void followUser(String follower, String followee) {
//		userDAO.addFollower(follower, followee);
//	}
//
//	public void unfollowUser(String follower, String followee) {
//		userDAO.removeFollower(follower, followee);
//	}
//}

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService implements UserServiceInterface {
	private Map<String, String> users = new HashMap<>();

	public UserService() {
		// 더미 데이터베이스를 초기화합니다. (실제로는 데이터베이스를 사용해야 함)
		users.put("user1", "password1");
		users.put("user2", "password2");
	}

	@Override
	public boolean authenticate(String username, String password) {
		// 사용자 정보를 맵에서 가져옴 (이 프로젝트에서 DB가 없기 때문에 대체)
		String storedPassword = users.get(username);

		// 사용자 정보가 없거나 비밀번호가 일치하지 않으면 로그인 실패
		return storedPassword != null && storedPassword.equals(password);
	}
}
