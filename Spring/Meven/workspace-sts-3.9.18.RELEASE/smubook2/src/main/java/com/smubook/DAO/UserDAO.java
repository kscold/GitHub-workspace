package com.smubook.DAO;

import com.smubook.models.User;

import java.util.Map;

public class UserDAO {
    private Map<String, User> userDB;

    public UserDAO(Map<String, User> userDB) {
        this.userDB = userDB;
    }

    public void insertUser(User user) {
        userDB.put(user.getUsername(), user);
    }

    public User selectUser(String username, String password) {
        User user = userDB.get(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public boolean isUsernameTaken(String username) {
        return userDB.containsKey(username);
    }

    public Map<String, User> getAllUsers() {
        return userDB;
    }

    public void addFollower(String follower, String followee) {
        User user = userDB.get(follower);
        if (user != null) {
            user.addFollowing(followee);
        }
    }

    public void removeFollower(String follower, String followee) {
        User user = userDB.get(follower);
        if (user != null) {
            user.removeFollowing(followee);
        }
    }
}
