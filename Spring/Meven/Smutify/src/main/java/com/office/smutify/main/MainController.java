package com.office.smutify.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainController {

    @GetMapping
    public String mainPage() {
        // Implement main page logic
        return "main/main";
    }
}
