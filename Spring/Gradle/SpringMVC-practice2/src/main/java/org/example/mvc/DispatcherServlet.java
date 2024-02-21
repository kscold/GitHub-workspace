package org.example.mvc;

import org.example.mvc.controller.RequestMethod;
import org.example.mvc.view.JspViewResolver;
import org.example.mvc.view.ModelAndView;
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
import java.util.List;


@WebServlet("/") // 어떤 경로와 메서드로 호출이되어도 반응
public class DispatcherServlet extends HttpServlet { // HttpServlet를 상속
    private static final Logger log = LoggerFactory.getLogger(DispatcherServlet.class);

    private List<HandlerMapping> handlerMappings;
    private List<HandlerAdapter> handlerAdapters;
    private List<ViewResolver> viewResolvers;

    @Override
    public void init() throws ServletException {
        RequestMappingHandlerMapping rmhm = new RequestMappingHandlerMapping();
        rmhm.init();

        AnnotationHandlerMapping ahm = new AnnotationHandlerMapping("org.example");
        ahm.initialize();

        handlerMappings = List.of(rmhm, ahm);
        handlerAdapters = List.of(new SimpleControllerHandlerAdapter(), new AnnotationHandlerAdapter());
        viewResolvers = Collections.singletonList(new JspViewResolver()); // ViewResolver가 jsp를 판단할 수 있는 메서드 호출을 초기 설정
    }

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.info("[DispatcherServlet] service started.");
        String requestURI = request.getRequestURI();
        RequestMethod requestMethod = RequestMethod.valueOf(request.getMethod());

        try {
            Object handler = handlerMappings.stream() // handlerMappings을 통해 적절한 핸들러를 선택하게 됨
                    .filter(hm -> hm.findHandler(new HandlerKey(requestMethod, requestURI)) != null) // 메서드랑 패스가 null이 아닌 값만 뽑기
                    .map(hm -> hm.findHandler(new HandlerKey(requestMethod, requestURI))) // 데이터를 뿌림
                    .findFirst() // 첫번째 만족하는 값을 반환
                    .orElseThrow(() -> new ServletException("No handler for [" + requestMethod + ", " + requestURI + "]")); // 에러를 던짐

//            handlerMapping.findHandler(new HandlerKey(RequestMethod.valueOf(request.getMethod()), request.getRequestURI()));
            // 정의한 HandlerKey 객체를 통해 메서드와 uri를 매칭하여 인스턴스화
            // 이후, finHandler를 통해 적절한 Controller를 객체로 반환 받음

            HandlerAdapter handlerAdapter = handlerAdapters.stream() // handlerAdapters 클래스를 통해 handler를 실행
                    .filter(ha -> ha.supports(handler)) // supports 객체 실행(전달한 handler가 Controller 인터페이스의 구현체(인스턴스)라면)
                    .findFirst() // 첫번째 만족하는 데이터를 찾아서 반환
                    .orElseThrow(() -> new ServletException("No adaptor for handler [" + handler + "]")); // 못찾으면 오류 메세지 반환

            ModelAndView modelAndView = handlerAdapter.handle(request, response, handler); // handlerAdapter에서 handle 메서드 실행(viewName String을 ModelAndView 객체로 반환)

            for (ViewResolver viewResolver : viewResolvers) { // viewResolvers의 메서드를 종류별로 순회
                View view = viewResolver.resolveView(modelAndView.getViewName()); // viewResolver에 따라 적절한 뷰 네임을 반환 받음
                view.render(modelAndView.getModel(), request, response); // 선택된 뷰를 렌더링
            }


        } catch (Exception e) {
            log.error("exception occurred: [{}]", e.getMessage(), e);
            throw new ServletException(e); // 에러를 화면에 표출
        }
    }
}
