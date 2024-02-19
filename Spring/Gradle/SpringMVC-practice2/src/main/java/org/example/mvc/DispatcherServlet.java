package org.example.mvc;

import org.example.mvc.controller.Controller;
import org.example.mvc.controller.RequestMethod;
import org.example.mvc.view.JspViewResolver;
import org.example.mvc.view.View;
import org.example.mvc.view.ViewResolver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;


@WebServlet("/") // 어떤 경로와 메서드로 호출이되어도 반응
public class DispatcherServlet extends HttpServlet { // HttpServlet를 상속
    private static final Logger log = LoggerFactory.getLogger(DispatcherServlet.class);

    private RequestMappingHandlerMapping rmhm;
    private List<ViewResolver> viewResolvers;

    @Override
    public void init() throws ServletException {
        rmhm = new RequestMappingHandlerMapping();
        rmhm.init();

        viewResolvers = Collections.singletonList(new JspViewResolver()); // ViewResolver가 jsp를 판단할 수 있는 메서드 호출을 초기 설정
    }

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.info("[DispatcherServlet] service started.");

        try {
            Controller handler = rmhm.findHandler(new HandlerKey(RequestMethod.valueOf(request.getMethod()), request.getRequestURI()));
            // 정의한 HandlerKey 객체를 통해 메서드와 uri를 매칭하여 인스턴스화
            // 이후, finHandler를 통해 적절한 컨트롤러를 반환 받음

            // 어떤 경우는 "redirect:/users" 가 되어야하고 어떤 경우는 forward가 되어야함
            String viewName = handler.handleRequest(request, response); // 적절한 컨트롤러에게 또 작업을 위임 후 서블릿이나 jsp String을 반환

            for (ViewResolver viewResolver : viewResolvers) {
                View view = viewResolver.resolveView(viewName);
                view.render(new HashMap<>(), request, response);
            }


        } catch (Exception e) {
            log.error("exception occurred: [{}]", e.getMessage(), e);
        }
    }
}
