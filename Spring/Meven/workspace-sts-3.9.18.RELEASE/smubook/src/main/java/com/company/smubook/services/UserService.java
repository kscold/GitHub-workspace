//package com.company.smubook.services;
//
//import com.company.smubook.models.User;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@Service
//public class UserService implements UserServiceInterface {
//	private Map<String, User> users = new HashMap<>();
//	private User currentUser; // 현재 로그인한 사용자를 저장할 변수
//
//	@Override
//	public void signUp(User user) {
//		users.put(user.getUsername(), user);
//		// 콘솔에 회원 가입 정보 출력
//		System.out.println("User Signed Up: " + user.getUsername());
//	}
//
//	@Override
//	public boolean authenticate(String username, String password) {
//		User user = users.get(username);
//		return user != null && user.getPassword().equals(password);
//	}
//
//	public boolean userExists(String username) {
//		return users.containsKey(username);
//	}
//
//	public List<User> getAllUsers() {
//		// 모든 사용자 목록을 가져오는 로직
//		return new ArrayList<>(users.values());
//	}
//
//	public List<User> getFollowingForCurrentUser() {
//		if (currentUser == null) {
//			return new ArrayList<>();
//		}
//		// 현재 사용자가 follow하는 사용자 목록을 가져오는 로직
//		return currentUser.getFollowing();
//	}
//
//	public void login(User user) {
//		// 로그인 처리 로직
//		currentUser = user; // 현재 사용자를 설정
//	}
//
//	public void logout() {
//		// 로그아웃 처리 로직
//		currentUser = null; // 현재 사용자를 null로 설정
//	}
//
//	public User getCurrentUser() {
//		return currentUser;
//	}
//}

//package com.company.smubook.services;
//
//import com.company.smubook.models.User;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.core.type.TypeReference;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.io.File;
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//import java.util.HashMap;
//
//@Service
//public class UserService implements UserServiceInterface {
//    private Map<String, User> users = new HashMap<>();
//    private User currentUser; // 현재 로그인한 사용자를 저장할 변수
//    private final String jsonFilePath = "src/main/java/com/company/smubook/DAO/users.json"; // JSON 파일 경로
//
//    // 생성자에서 JSON 파일을 읽어 사용자 정보를 초기화
//    @Autowired
//    public UserService() {
//        loadUsersFromJsonFile();
//    }
//
//    public void signUp(User user) {
//        users.put(user.getUsername(), user);
//        // 콘솔에 회원 가입 정보 출력
//        System.out.println("User Signed Up: " + user.getUsername());
//
//        try {
//            // 사용자 정보를 JSON 파일로 저장
//            saveUsersToFile(new ArrayList<>(users.values()));
//            System.out.println("Saved user data to: " + jsonFilePath);
//        } catch (IOException e) {
//            // IOException 처리
//            e.printStackTrace();
//        }
//    }
//
//    // 사용자 정보를 JSON 파일로 저장
//    public void saveUsersToFile(List<User> users) throws IOException {
//        File file = new File(jsonFilePath);
//
//        // 디렉토리가 없는 경우 생성
//        if (!file.getParentFile().exists()) {
//            file.getParentFile().mkdirs();
//        }
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        objectMapper.writeValue(file, users);
//    }
//
//    @Override
//    public boolean authenticate(String username, String password) {
//        User user = users.get(username);
//        return user != null && user.getPassword().equals(password);
//    }
//
//    public boolean userExists(String username) {
//        return users.containsKey(username);
//    }
//
//    public List<User> getAllUsers() {
//        return new ArrayList<>(users.values());
//    }
//
//    public List<User> getFollowingForCurrentUser() {
//        if (currentUser == null) {
//            return new ArrayList<>();
//        }
//        return currentUser.getFollowing();
//    }
//
//    public void login(User user) {
//        currentUser = user;
//    }
//
//    public void logout() {
//        currentUser = null;
//    }
//
//    public User getCurrentUser() {
//        return currentUser;
//    }
//
//    // JSON 파일에서 사용자 정보 읽기
//    private void loadUsersFromJsonFile() {
//        try {
//            ObjectMapper objectMapper = new ObjectMapper();
//            List<User> userList = objectMapper.readValue(new File(jsonFilePath), new TypeReference<List<User>>() {});
//
//            for (User user : userList) {
//                users.put(user.getUsername(), user);
//            }
//        } catch (IOException e) {
//            // JSON 파일을 읽을 때 예외 처리
//            e.printStackTrace();
//        }
//    }
//}
package com.company.smubook.services;

import com.company.smubook.models.User;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@Service
public class UserService implements UserServiceInterface {
	private Map<String, User> users = new HashMap<>();
	private User currentUser;
	private final String jsonFilePath = "/Users/chan6502/Desktop/GitHub-workspace/Spring/Meven/workspace-sts-3.9.18.RELEASE/smubook/src/users.json"; // JSON
																																						// 파일
																																						// 이름

	public UserService() {
		// 이곳에서는 JSON 파일을 읽지 않습니다.
	}

	public void signUp(User user) {
	    users.put(user.getUsername(), user);
	    System.out.println("User Signed Up: " + user.getUsername());

	    createJsonFile(jsonFilePath); // 사용자 데이터를 JSON 파일에 저장
	}

	public void createJsonFile(String jsonFilePath) {
		try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
			JSONArray jsonUserArray = new JSONArray();
			// 사용자 데이터를 JSON 배열에 추가
			for (User user : users.values()) {
				JSONObject jsonUser = new JSONObject();
				jsonUser.put("username", user.getUsername());
				jsonUser.put("password", user.getPassword());
				jsonUserArray.add(jsonUser);
			}
			// JSON 파일에 데이터 쓰기
			fileWriter.write(jsonUserArray.toJSONString());
		} catch (IOException e) {
			e.printStackTrace();
		}
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

		return jsonUserArray;
	}

	public void saveUsersToFile(Map<String, User> users, String jsonFilePath) {
		JSONArray jsonUserArray = new JSONArray();

		// 기존 JSON 파일이 있는 경우에는 읽어옵니다.
		JSONArray existingUsers = loadUsersFromJsonFile();
		if (existingUsers != null) {
			jsonUserArray.addAll(existingUsers);
		}

		// 새로운 사용자 데이터를 JSON 배열에 추가합니다.
		for (User user : users.values()) {
			JSONObject jsonUser = new JSONObject();
			jsonUser.put("username", user.getUsername());
			jsonUser.put("password", user.getPassword());
			jsonUserArray.add(jsonUser);
		}

		try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
			fileWriter.write(jsonUserArray.toJSONString());
		} catch (IOException e) {
			e.printStackTrace();
		}
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
		return new ArrayList<>(users.values());
	}

	public List<User> getFollowingForCurrentUser() {
		if (currentUser == null) {
			return new ArrayList<>();
		}
		return currentUser.getFollowing();
	}

	public void login(String username, String password) {
		if (authenticate(username, password)) {
			// 사용자 인증 성공
			currentUser = users.get(username);
		} else {
			// 사용자 인증 실패
			currentUser = null;
		}
	}

	public void logout() {
		currentUser = null;
	}

	public User getCurrentUser() {
		return currentUser;
	}
}
