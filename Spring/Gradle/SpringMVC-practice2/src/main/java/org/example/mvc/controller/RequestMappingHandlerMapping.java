package org.example.mvc.controller;

import java.util.HashMap;
import java.util.Map;

public class RequestMappingHandlerMapping {
    // /users [value]: UserController
    private Map<String, Controller> mappings = new HashMap<>(); // HashMap으로 각 패스에 적절한 컨트롤러를 저장

    public void init() {
        mappings.put("/", new HomeController()); // 초기 / url은 HomeController를 배치
    }

    public Controller findHandler(String uriPath) { // url 패스와 일치하는 컨트롤러를 리턴해주는 메서드
        return mappings.get(uriPath);
    }
}
