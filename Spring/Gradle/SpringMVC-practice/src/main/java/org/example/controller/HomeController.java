package org.example.controller;

import org.example.annotation.Controller;
import org.example.annotation.RequestMappging;
import org.example.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Controller
public class HomeController {
    @RequestMappging(value = "/", method = RequestMethod.GET)
    public String home(HttpServletRequest request, HttpServletResponse response) {

        return "home";
    }
}
