package com.example.firstproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FistController {

    @GetMapping("/hi")
    public String niceToMeetYou() {
        return "greetings"; // greetings.mustache 파일 반환
    }
}
