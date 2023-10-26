package com.company.smubook.services;

import com.company.smubook.models.User;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService implements UserServiceInterface {
    private Map<String, User> users = new HashMap<>();

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
}
