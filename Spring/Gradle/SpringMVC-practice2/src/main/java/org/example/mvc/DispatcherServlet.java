package org.example.mvc;

import org.example.mvc.controller.Controller;
import org.example.mvc.controller.RequestMappingHandlerMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet("/") // 어떤 경로와 메서드로 호출이되어도 반응
public class DispatcherServlet extends HttpServlet { // HttpServlet를 상속
    private static final Logger log = LoggerFactory.getLogger(DispatcherServlet.class);

    private RequestMappingHandlerMapping rmhm;

    @Override
    public void init() throws ServletException {
        rmhm = new RequestMappingHandlerMapping();
        rmhm.init();
    }

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.info("[DispatcherServlet] service started.");

        try {
            Controller handler = rmhm.findHandler(request.getRequestURI()); // finHandler를 통해 적절한 컨트롤러를 반환 받음
            String viewName = handler.handleRequest(request, response); // 적절한 컨트롤러에게 또 작업을 위임 후 서블릿이나 jsp String을 반환

            RequestDispatcher requestDispatcher = request.getRequestDispatcher(viewName); // 포워드할 requestDispatcher 객체 생성
            requestDispatcher.forward(request, response); // 포워드

        } catch (Exception e) {
            log.error("exception occurred: [{}]", e.getMessage(), e);
        }
    }
}
