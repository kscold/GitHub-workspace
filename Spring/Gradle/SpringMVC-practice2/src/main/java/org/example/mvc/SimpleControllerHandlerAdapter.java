package org.example.mvc;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.example.mvc.controller.Controller;
import org.example.mvc.view.ModelAndView;

public class SimpleControllerHandlerAdapter implements HandlerAdapter {

    @Override
    public boolean supports(Object handler) {
        return (handler instanceof Controller); // 전달한 handler가 Controller 인터페이스의 구현체(인스턴스)라면
    }

    @Override
    public ModelAndView handle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String viewName = ((Controller) handler).handleRequest(request, response); // Controller의 구현체가 호출을 하면 viewName으로 리턴
        return new ModelAndView(viewName); // 최종적으로는 ModelAndView 객체로 반환
    }
}
