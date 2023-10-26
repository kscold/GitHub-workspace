package com.company.smubook.services;

import com.company.smubook.models.User;

public interface UserServiceInterface {
    void signUp(User user);
    boolean authenticate(String username, String password);
}