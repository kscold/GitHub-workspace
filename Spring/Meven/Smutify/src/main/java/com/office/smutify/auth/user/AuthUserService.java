package com.office.smutify.auth.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthUserService {

    @Autowired
    private AuthUserDao authUserDao;

    public AuthUserVo registerUser(AuthUserVo authUser) {
        System.out.println("[AuthUserService] registerUser()");
        // 유저가 존재하는지 확인
        AuthUserVo existingUser = authUserDao.findByUsername(authUser.getUsername());
        if (existingUser != null) {
            return null; // 유저가 존재하면 null를 반환
        }

        // 유저가 존재하지 않는다면, 회원가입 진행
        authUserDao.save(authUser);
        return authUser;
    }

    public AuthUserVo loginUser(String username, String password) {
        System.out.println("[AuthUserService] loginUser()");
        // Implement login logic
        AuthUserVo authUser = authUserDao.findByUsername(username);
        if (authUser != null && authUser.getPassword().equals(password)) {
            return authUser;
        }
        return null; // Return null if login fails
    }
}
