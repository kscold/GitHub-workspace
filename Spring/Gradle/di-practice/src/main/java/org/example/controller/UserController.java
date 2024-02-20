package org.example.controller;

import org.example.annotation.Controller;
import org.example.annotation.Inject;
import org.example.service.UserSerive;

@Controller
public class UserController {
    private final UserSerive userSerive;

    @Inject
    public UserController(UserSerive userSerive) {
        this.userSerive = userSerive;
    }

    public UserSerive getUserSerive() {
        return userSerive;
    }
}
