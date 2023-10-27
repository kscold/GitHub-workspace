
package com.company.smubook.services;

import com.company.smubook.FileWatcher;
import com.company.smubook.models.User;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.HashMap;
import java.util.HashSet;

@Service
public class UserService implements UserServiceInterface {
	private Map<String, User> users = new HashMap<>();
	private User currentUser;
	private final String jsonFilePath = "/Users/chan6502/Desktop/GitHub-workspace/Spring/Meven/workspace-sts-3.9.18.RELEASE/smubook/src/users.json";
	// 처음에 JSON 파일 위치를 설정해야 함 -> 사용자에 따라서 파일 위치를 수정해야할 수 있음

	// FileWatcher 인스턴스에 담기
	private FileWatcher fileWatcher;

	public UserService() {
		// FileWatcher를 생성하고 시작
		fileWatcher = new FileWatcher(jsonFilePath, this);
		Thread watcherThread = new Thread(fileWatcher);
		watcherThread.start();
	} 

	// handleFileChange 메서드를 구현하면 JSON 파일 변경 시 호출됩니다.
	public void handleFileChange() {
		JSONArray existingUsers = loadUsersFromJsonFile();

		if (currentUser != null) {
			String currentUserUsername = currentUser.getUsername();

			for (Object jsonUser : existingUsers) {
				JSONObject jsonObject = (JSONObject) jsonUser;
				String username = (String) jsonObject.get("username");
				if (username.equals(currentUserUsername)) {
					// 현재 사용자를 찾으면 follow 필드를 true로 설정
					jsonObject.put("follow", true);
				}
			}

			// JSON 데이터를 파일에 저장
			saveUsersToJsonFile(existingUsers);
		}
	}

	public String signUp(User user, Model model) {
		// 이미 있는 username이거나 비어있는지 확인
		if (user.getUsername().isEmpty() || users.containsKey(user.getUsername())) {
			model.addAttribute("error", "Invalid Username or User Already Exists: " + user.getUsername());
			return "signup_ng"; 
		}

		// 존재하는 데이터 추출
		JSONArray existingUsers = loadUsersFromJsonFile();

		int maxId = 0;

		if (existingUsers != null) {
			for (Object jsonUser : existingUsers) {
				JSONObject jsonObject = (JSONObject) jsonUser;
				String username = (String) jsonObject.get("username");

				int userId = Integer.parseInt(jsonObject.get("id").toString());
				maxId = Math.max(maxId, userId);

				if (username.equals(user.getUsername())) {

					model.addAttribute("error", "JSON에 이미 존재합니다.: " + user.getUsername());
					return "signup_ng";
				}
			}
		}

		String userId = Integer.toString(maxId + 1);
		user.setId(userId);
		user.setFollow(false); // 언팔로우 설정
		users.put(user.getUsername(), user);

		existingUsers.add(createUserJSONObject(user));

		saveUsersToJsonFile(existingUsers);

		System.out.println("회원가입된 User: " + user.getUsername() + ", ID: " + user.getId());

		return "signup_ok";
	}

	public void createJsonFile(String jsonFilePath) {
		JSONArray jsonUserArray = new JSONArray();
		// 사용자 데이터를 JSON 배열에 추가
		for (User user : users.values()) {
			jsonUserArray.add(createUserJSONObject(user));
		}

		// JSON 파일에 저장
		saveUsersToJsonFile(jsonUserArray);
	}

	private JSONObject createUserJSONObject(User user) {
		JSONObject userObject = new JSONObject();
		userObject.put("id", user.getId());
		userObject.put("username", user.getUsername());
		userObject.put("password", user.getPassword());
		userObject.put("follow", user.getFollow());

		// 팔로우한 사용자 목록을 JSON 배열로 변환
		JSONArray followingArray = new JSONArray();
		for (User followingUser : user.getFollowing()) {
			followingArray.add(followingUser.getId()); // 여기에서는 팔로우한 사용자의 ID를 저장
		}
		userObject.put("following", followingArray);

		return userObject;
	}

	public JSONArray loadUsersFromJsonFile() {
		JSONArray jsonUserArray = new JSONArray();

		try (FileReader reader = new FileReader(jsonFilePath)) {
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(reader);
			jsonUserArray = (JSONArray) obj;
		} catch (IOException | ParseException e) {
			e.printStackTrace();
		}

		// 중복되는 username을 삭제
		Set<String> usernames = new HashSet<>();
		JSONArray uniqueUsers = new JSONArray();

		for (Object jsonUser : jsonUserArray) {
			JSONObject jsonObject = (JSONObject) jsonUser;
			String username = (String) jsonObject.get("username");

			if (!username.isEmpty() && !usernames.contains(username)) {
				uniqueUsers.add(jsonObject);
				usernames.add(username);
			}
		}

		return uniqueUsers;
	}

	public void saveUsersToJsonFile(JSONArray usersArray) {
		try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
			fileWriter.write(usersArray.toJSONString());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// overloding해서 사용
	public void saveUsersToJsonFile(Map<String, User> users, String jsonFilePath) {
		JSONArray jsonUserArray = new JSONArray();

		for (User user : users.values()) {
			jsonUserArray.add(createUserJSONObject(user));
		}

		saveUsersToJsonFile(jsonUserArray);
	}

	// 해당 username에 해당하는 사용자를 가져오는 메서드
	private User getUserByUsername(String username) {
		for (User user : users.values()) {
			if (user.getUsername().equals(username)) {
				return user;
			}
		}
		return null;
	}

	// 사용자 인증 부분
	public boolean authenticate(String username, String password) {
		JSONArray existingUsers = loadUsersFromJsonFile();

		if (existingUsers != null) {
			for (Object jsonUser : existingUsers) {
				JSONObject jsonObject = (JSONObject) jsonUser;
				String storedUsername = (String) jsonObject.get("username");
				String storedPassword = (String) jsonObject.get("password");

				if (storedUsername.equals(username) && storedPassword.equals(password)) {
					
					currentUser = getUserByUsername(username);
					if (currentUser != null) {
						System.out.println("Logged in as: " + currentUser.getUsername());
						currentUser.setFollow(true);
					}
					return true;
				}
			}
		}
		return false;
	}

	public boolean userExists(String username) {
		return users.containsKey(username);
	}

	public List<User> getAllUsers() {
		return new ArrayList<>(users.values());
	}

	public void logout() {
		if (currentUser != null) {
			currentUser.setFollow(false); // 로그아웃 시 팔로우 상태를 false로 변경
			currentUser = null;
		}
	}

	public User getCurrentUser() {
		return currentUser;
	}


	// 여기부터 팔로우 기능 설정
	public List<String> getAllUsernamesFromJsonFile() {
		JSONArray existingUsers = loadUsersFromJsonFile();
		List<String> usernames = new ArrayList<>();

		if (existingUsers != null) {
			for (Object jsonUser : existingUsers) {
				JSONObject jsonObject = (JSONObject) jsonUser;
				String username = (String) jsonObject.get("username");
				usernames.add(username);
			}
		}

		return usernames;
	}

	public List<User> getFollowingForCurrentUser() {
		if (currentUser == null) {
			return new ArrayList<>();
		}
		return currentUser.getFollowing();
	}

	// 팔로우 기능
	public boolean followUser(String usernameToFollow, String currentUserUsername) {
		User currentUser = users.get(currentUserUsername);
		User userToFollow = users.get(usernameToFollow);

		if (currentUser != null && userToFollow != null) {
			if (!currentUser.getFollowing().contains(userToFollow)) {
				currentUser.follow(userToFollow);
				userToFollow.setFollow(true); // 팔로우로 설정

				// JSON을 업데이트
				JSONArray existingUsers = loadUsersFromJsonFile();
				updateFollowInJson(existingUsers, currentUserUsername, usernameToFollow, true);

				System.out.println(currentUserUsername + " is now following " + usernameToFollow);

				return true;
			}
		}

		return false;
	}

	// 언팔로우 기능
	public boolean unfollowUser(String usernameToUnfollow, String currentUserUsername) {
		User currentUser = users.get(currentUserUsername);
		User userToUnfollow = users.get(usernameToUnfollow);

		if (currentUser != null && userToUnfollow != null) {
			if (currentUser.getFollowing().contains(userToUnfollow)) {
				currentUser.unfollow(userToUnfollow);
				userToUnfollow.setFollow(false); // 언팔로우 설정

				JSONArray existingUsers = loadUsersFromJsonFile();
				updateFollowInJson(existingUsers, currentUserUsername, usernameToUnfollow, false);

				System.out.println(currentUserUsername + " is now unfollowing " + usernameToUnfollow);

				return true;
			}
		}

		return false;
	}

	// JSON 파일 내의 팔로우 정보를 업데이트하는 메서드
	private void updateFollowInJson(JSONArray usersArray, String currentUserUsername, String targetUsername,
			boolean followStatus) {
		for (Object jsonUser : usersArray) {
			JSONObject jsonObject = (JSONObject) jsonUser;
			String username = (String) jsonObject.get("username");

			if (username.equals(currentUserUsername)) {
				JSONArray followingArray = (JSONArray) jsonObject.get("following");
				if (followStatus) {
					// 팔로우 상태를 true로 설정
					if (!followingArray.contains(targetUsername)) {
						followingArray.add(targetUsername);
					}
				} else {
					// 팔로우 상태를 false로 설정
					followingArray.remove(targetUsername);
				}
			}
		}

		// JSON 데이터를 파일에 저장
		saveUsersToJsonFile(usersArray);
	}

}
