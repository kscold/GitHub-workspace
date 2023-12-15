package com.office.smutify.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/auth")
public class AuthHomeController {

    @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
    public String home() {
        System.out.println("[AuthHomeController] home()");

        String nextPage = "auth/login";

        return nextPage;

    }

}