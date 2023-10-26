package com.smubook.services;

import org.springframework.stereotype.Service;

public interface UserServiceInterface {
    boolean authenticate(String username, String password);
}
