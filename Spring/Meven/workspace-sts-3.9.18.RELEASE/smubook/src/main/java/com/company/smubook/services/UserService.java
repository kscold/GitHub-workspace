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
//
//import org.json.simple.JSONArray;
//import org.json.simple.JSONObject;
//import org.json.simple.parser.JSONParser;
//import org.json.simple.parser.ParseException;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.stereotype.Service;
//
//import java.io.File;
//import java.io.FileReader;
//import java.io.FileWriter;
//import java.io.IOException;
//import java.io.InputStream;
//import java.io.InputStreamReader;
//import java.io.OutputStream;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//import java.util.HashMap;
//
//@Service
//public class UserService implements UserServiceInterface {
//	private Map<String, User> users = new HashMap<>();
//	private User currentUser;
////	private final String jsonFilePath = "/Users/chan6502/Desktop/GitHub-workspace/Spring/Meven/workspace-sts-3.9.18.RELEASE/smubook/src/users.json"; // JSON
//	private final String jsonFileName = "users.json"; // 파일
//	 private String jsonFilePath; // 파일 경로
//
//	 public UserService() {
//	        // JSON 파일 경로를 설정합니다. 클래스패스 상에 있는 파일을 사용하도록 합니다.
//	        this.jsonFilePath = getClass().getClassLoader().getResource(jsonFileName).getFile();
//	    }
////	public void signUp(User user) {
////	    users.put(user.getUsername(), user);
////	    System.out.println("User Signed Up: " + user.getUsername());
////
////	    createJsonFile(jsonFilePath); // 사용자 데이터를 JSON 파일에 저장
////	}
//
//	public void signUp(User user) {
//	    users.put(user.getUsername(), user);
//	    System.out.println("User Signed Up: " + user.getUsername());
//
//	    try {
//	        // ClassPathResource를 사용하여 클래스 패스 내의 파일 경로를 가져옵니다.
//	        ClassPathResource resource = new ClassPathResource(jsonFileName);
//	        File jsonFile = resource.getFile();
//
//	        // 파일이 존재하면 JSON 파일 업데이트, 그렇지 않으면 JSON 파일 생성
//	        if (jsonFile.exists()) {
//	            saveUsersToFile(users, jsonFile.getAbsolutePath());
//	        } else {
//	            createJsonFile(jsonFile.getAbsolutePath());
//	        }
//	    } catch (IOException e) {
//	        e.printStackTrace();
//	    }
//	}
//
//	public void createJsonFile(String jsonFilePath) {
//		try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
//			JSONArray jsonUserArray = new JSONArray();
//			// 사용자 데이터를 JSON 배열에 추가
//			for (User user : users.values()) {
//				JSONObject jsonUser = new JSONObject();
//				jsonUser.put("username", user.getUsername());
//				jsonUser.put("password", user.getPassword());
//				jsonUserArray.add(jsonUser);
//			}
//			// JSON 파일에 데이터 쓰기
//			fileWriter.write(jsonUserArray.toJSONString());
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}
//
//	public JSONArray loadUsersFromJsonFile() {
//		JSONArray jsonUserArray = new JSONArray();
//
//		try (FileReader reader = new FileReader(jsonFilePath)) {
//			JSONParser parser = new JSONParser();
//			Object obj = parser.parse(reader);
//			jsonUserArray = (JSONArray) obj;
//		} catch (IOException | ParseException e) {
//			e.printStackTrace();
//		}
//
//		return jsonUserArray;
//	}
//
//	public void saveUsersToFile(Map<String, User> users, String jsonFilePath) {
//		JSONArray jsonUserArray = new JSONArray();
//
//		// 기존 JSON 파일이 있는 경우에는 읽어옵니다.
//		JSONArray existingUsers = loadUsersFromJsonFile();
//		if (existingUsers != null) {
//			jsonUserArray.addAll(existingUsers);
//		}
//
//		// 새로운 사용자 데이터를 JSON 배열에 추가합니다.
//		for (User user : users.values()) {
//			JSONObject jsonUser = new JSONObject();
//			jsonUser.put("username", user.getUsername());
//			jsonUser.put("password", user.getPassword());
//			jsonUserArray.add(jsonUser);
//		}
//
//		try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
//			fileWriter.write(jsonUserArray.toJSONString());
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
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
//		return new ArrayList<>(users.values());
//	}
//
//	public List<User> getFollowingForCurrentUser() {
//		if (currentUser == null) {
//			return new ArrayList<>();
//		}
//		return currentUser.getFollowing();
//	}
//
//	public void login(String username, String password) {
//		if (authenticate(username, password)) {
//			// 사용자 인증 성공
//			currentUser = users.get(username);
//		} else {
//			// 사용자 인증 실패
//			currentUser = null;
//		}
//	}
//
//	public void logout() {
//		currentUser = null;
//	}
//
//	public User getCurrentUser() {
//		return currentUser;
//	}
//}

//package com.company.smubook.services;
//
//import com.company.smubook.models.User;
//
//import org.json.simple.JSONArray;
//import org.json.simple.JSONObject;
//import org.json.simple.parser.JSONParser;
//import org.json.simple.parser.ParseException;
//
//import org.springframework.stereotype.Service;
//
//import java.io.FileReader;
//import java.io.FileWriter;
//import java.io.IOException;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//import java.util.HashMap;
//
//@Service
//public class UserService implements UserServiceInterface {
//	private Map<String, User> users = new HashMap<>();
//	private User currentUser;
//	private final String jsonFilePath = "/Users/chan6502/Desktop/GitHub-workspace/Spring/Meven/workspace-sts-3.9.18.RELEASE/smubook/src/users.json"; // JSON
//																																						// 파일
//																																						// 이름
//
//	public UserService() {
//		// 이곳에서는 JSON 파일을 읽지 않습니다.
//	}
//
//	public void signUp(User user) {
//		users.put(user.getUsername(), user);
//		System.out.println("User Signed Up: " + user.getUsername());
//
//		createJsonFile(jsonFilePath); // 사용자 데이터를 JSON 파일에 저장
//	}
//
//	public void createJsonFile(String jsonFilePath) {
//		try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
//			JSONArray jsonUserArray = new JSONArray();
//			// 사용자 데이터를 JSON 배열에 추가
//			for (User user : users.values()) {
//				JSONObject jsonUser = new JSONObject();
//				jsonUser.put("username", user.getUsername());
//				jsonUser.put("password", user.getPassword());
//				jsonUserArray.add(jsonUser);
//			}
//			// JSON 파일에 데이터 쓰기
//			fileWriter.write(jsonUserArray.toJSONString());
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}
//
//	public JSONArray loadUsersFromJsonFile() {
//		JSONArray jsonUserArray = new JSONArray();
//
//		try (FileReader reader = new FileReader(jsonFilePath)) {
//			JSONParser parser = new JSONParser();
//			Object obj = parser.parse(reader);
//			jsonUserArray = (JSONArray) obj;
//		} catch (IOException | ParseException e) {
//			e.printStackTrace();
//		}
//
//		return jsonUserArray;
//	}
//
//	public void saveUsersToFile(Map<String, User> users, String jsonFilePath) {
//		JSONArray jsonUserArray = new JSONArray();
//
//		// 기존 JSON 파일이 있는 경우에는 읽어옵니다.
//		JSONArray existingUsers = loadUsersFromJsonFile();
//		if (existingUsers != null) {
//			jsonUserArray.addAll(existingUsers);
//		}
//
//		// 새로운 사용자 데이터를 JSON 배열에 추가합니다.
//		for (User user : users.values()) {
//			JSONObject jsonUser = new JSONObject();
//			jsonUser.put("username", user.getUsername());
//			jsonUser.put("password", user.getPassword());
//			jsonUserArray.add(jsonUser);
//		}
//
//		try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
//			fileWriter.write(jsonUserArray.toJSONString());
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}
//
////	@Override
////	public boolean authenticate(String username, String password) {
////		User user = users.get(username);
////		return user != null && user.getPassword().equals(password);
////	}
//
//	public boolean authenticate(String username, String password) {
//		for (User user : users.values()) {
//			if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
//				// 사용자 인증 성공
//				currentUser = user;
//				return true;
//			}
//		}
//		return false;
//	}
//
//	public boolean userExists(String username) {
//		return users.containsKey(username);
//	}
//
//	public List<User> getAllUsers() {
//		return new ArrayList<>(users.values());
//	}
//
//	public List<User> getFollowingForCurrentUser() {
//		if (currentUser == null) {
//			return new ArrayList<>();
//		}
//		return currentUser.getFollowing();
//	}
//
//	public void login(String username, String password) {
//		if (authenticate(username, password)) {
//			// 사용자 인증 성공
//			currentUser = users.get(username);
//		} else {
//			// 사용자 인증 실패
//			currentUser = null;
//		}
//	}
//
//	public void logout() {
//		currentUser = null;
//	}
//
//	public User getCurrentUser() {
//		return currentUser;
//	}
//}

//
//    public void signUp(User user) {
//        users.put(user.getUsername(), user);
//        System.out.println("User Signed Up: " + user.getUsername());
//
//        createJsonFile(jsonFilePath); // 사용자 데이터를 JSON 파일에 저장
//    }

//	public void signUp(User user) {
//		// 동일한 사용자가 이미 존재하는지 확인
//		if (users.containsKey(user.getUsername())) {
//			System.out.println("User Already Exists: " + user.getUsername());
//			return; // 회원가입 실패 처리
//		}
//
//		JSONArray existingUsers = loadUsersFromJsonFile();
//
//		if (existingUsers != null) {
//			// 이미 데이터가 있는 경우에는 기존 데이터를 유지하고 추가만 수행
//			users.put(user.getUsername(), user);
//
//			int maxId = 0;
//			for (Object jsonUser : existingUsers) {
//			    JSONObject jsonObject = (JSONObject) jsonUser;
//			    int userId = Integer.parseInt(jsonObject.get("id").toString());
//			    maxId = Math.max(maxId, userId);
//			}
//			String userId = Integer.toString(maxId + 1);
//			user.setId(userId);
//		} else {
//			// JSON 파일이 비어 있거나 없는 경우에는 데이터를 저장
//			users.put(user.getUsername(), user);
//			// 초기 ID를 1로 설정
//			user.setId("1");
//			createJsonFile(jsonFilePath);
//		}
//
//		System.out.println("User Signed Up: " + user.getUsername() + ", ID: " + user.getId());
//		saveUsersToFile(users, jsonFilePath); // 사용자 데이터를 JSON 파일에 저장
//	}
	
	

	
//	public void signUp(User user) {
//	    // 동일한 사용자가 이미 존재하는지 확인
//	    if (users.containsKey(user.getUsername())) {
//	        System.out.println("User Already Exists: " + user.getUsername());
//	        return; // 회원가입 실패 처리
//	    }
//
//	    JSONArray existingUsers = loadUsersFromJsonFile();
//
//	    if (existingUsers != null) {
//	        boolean userExistsInJson = false;
//	        int maxId = 0;
//
//	        for (Object jsonUser : existingUsers) {
//	            JSONObject jsonObject = (JSONObject) jsonUser;
//	            String username = (String) jsonObject.get("username");
//	            if (username.equals(user.getUsername())) {
//	                userExistsInJson = true;
//	                break;
//	            }
//
//	            int userId = Integer.parseInt(jsonObject.get("id").toString());
//	            maxId = Math.max(maxId, userId);
//	        }
//
//	        if (!userExistsInJson) {
//	            // 사용자 추가 로직을 실행
//	            String userId = Integer.toString(maxId + 1);
//	            user.setId(userId);
//	            users.put(user.getUsername(), user);
//	        }
//	    } else {
//	        // JSON 파일이 비어 있거나 없는 경우에는 데이터를 저장
//	        users.put(user.getUsername(), user);
//	        // 초기 ID를 1로 설정
//	        user.setId("1");
//	        createJsonFile(jsonFilePath);
//	    }
//
//	    System.out.println("User Signed Up: " + user.getUsername() + ", ID: " + user.getId());
//	    saveUsersToFile(users, jsonFilePath); // 사용자 데이터를 JSON 파일에 저장
//	}

package com.company.smubook.services;

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


	public String signUp(User user, Model model) {
        // 동일한 사용자가 이미 존재하는지 확인
        if (users.containsKey(user.getUsername())) {
            model.addAttribute("error", "User Already Exists: " + user.getUsername());
            return "signup_ng"; // 회원가입 실패 처리
        }

        JSONArray existingUsers = loadUsersFromJsonFile();

        if (existingUsers != null) {
            boolean userExistsInJson = false;
            int maxId = 0;

            for (Object jsonUser : existingUsers) {
                JSONObject jsonObject = (JSONObject) jsonUser;
                String username = (String) jsonObject.get("username");
                if (username.equals(user.getUsername())) {
                    userExistsInJson = true;
                    break;
                }

                int userId = Integer.parseInt(jsonObject.get("id").toString());
                maxId = Math.max(maxId, userId);
            }

            if (!userExistsInJson) {
                // 사용자 추가 로직을 실행
                String userId = Integer.toString(maxId + 1);
                user.setId(userId);
                users.put(user.getUsername(), user);
            }
        } else {
            // JSON 파일이 비어 있거나 없는 경우에는 데이터를 저장
            users.put(user.getUsername(), user);
            // 초기 ID를 1로 설정
            user.setId("1");
            createJsonFile(jsonFilePath);
        }

        System.out.println("User Signed Up: " + user.getUsername() + ", ID: " + user.getId());
        saveUsersToFile(users, jsonFilePath); // 사용자 데이터를 JSON 파일에 저장

        return "signup_ok"; // 회원가입 성공 처리
    }



	public void createJsonFile(String jsonFilePath) {
		try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
			JSONArray jsonUserArray = new JSONArray();
			// 사용자 데이터를 JSON 배열에 추가
			for (User user : users.values()) {
				JSONObject jsonUser = new JSONObject();
				jsonUser.put("id", user.getId()); // 사용자 ID 추가
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
			jsonUser.put("id", user.getId()); // 사용자 ID 추가
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

	public boolean authenticate(String username, String password) {
		for (User user : users.values()) {
			if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
				// 사용자 인증 성공
				currentUser = user;
				return true;
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


	@Override
	public void signUp(User user) {
		// TODO Auto-generated method stub
		
	}
}
