package org.example.mvc;

import org.example.mvc.controller.*;

import java.util.HashMap;
import java.util.Map;

public class RequestMappingHandlerMapping {
    // /users [value]: UserController
    private Map<HandlerKey, Controller> mappings = new HashMap<>(); // HashMap으로 각 패스에 적절한 컨트롤러를 저장

    public void init() {
        mappings.put(new HandlerKey(RequestMethod.GET, "/"), new HomeController()); // 초기 / url은 HomeController를 배치
        mappings.put(new HandlerKey(RequestMethod.GET, "/users"), new UserListController());
        mappings.put(new HandlerKey(RequestMethod.POST, "/users"), new UserCreateController());
        mappings.put(new HandlerKey(RequestMethod.GET, "/user/form"), new ForwardController("/user/form.jsp"));
    }

    public Controller findHandler(HandlerKey uriPath) { // url 패스와 매칭되어 있는 컨트롤러를 리턴해주는 메서드
        return mappings.get(uriPath); // Map 반환
    }
}
