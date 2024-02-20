package org.example.mvc.repository;

import org.example.mvc.model.User;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class UserRepository {
    private static Map<String, User> users = new HashMap<>();

    public static void save(User user) {
        users.put(user.getUserId(), user);
    }

    public static Collection<User> findAll() { // Collection(집합) 객체로 설정, User 객체의 값을 찾는 메서드
        return users.values(); // map의 value 목록을 Collection 형태로 리턴
    }
}
