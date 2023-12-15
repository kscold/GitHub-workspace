package com.office.smutify.auth.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/auth/user")
public class AuthUserController {

    @Autowired
    private AuthUserService authUserService;

    @GetMapping("/login")
    public String loginPage() {
        System.out.println("[AuthUserController] loginPage()");
        return "auth/login";
    }

    @PostMapping("/login")
    public ModelAndView loginUser(@RequestParam String username, @RequestParam String password, HttpSession session) {
        System.out.println("[AuthUserController] loginUser()");

        ModelAndView modelAndView = new ModelAndView();
        AuthUserVo authUser = authUserService.loginUser(username, password);

        if (authUser != null) {
            session.setAttribute("authUser", authUser);
            modelAndView.setViewName("redirect:/main");
        } else {
            modelAndView.setViewName("auth/login_error");
        }

        return modelAndView;
    }

    @GetMapping("/signup")
    public String signupPage() {
        System.out.println("[AuthUserController] signupPage()");
        return "auth/signup";
    }

    @PostMapping("/signup")
    public ModelAndView registerUser(@RequestParam String username, @RequestParam String password) {
        System.out.println("[AuthUserController] registerUser()");

        ModelAndView modelAndView = new ModelAndView();
        AuthUserVo authUser = new AuthUserVo();
        authUser.setUsername(username);
        authUser.setPassword(password);

        AuthUserVo registeredUser = authUserService.registerUser(authUser);

        if (registeredUser != null) {
            modelAndView.setViewName("redirect:/auth/user/login");
        } else {
            modelAndView.setViewName("auth/signup_error");
        }

        return modelAndView;
    }
}
