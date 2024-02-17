package org.example;

import org.example.calculator.domain.Calculator;
import org.example.calculator.domain.PositiveNumber;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.http.HttpRequest;

@WebServlet("/calculate")
public class CalculatorServlet extends HttpServlet {
    // 원래 Servlet 인터페이스에 들어 있는 메서드들을 오버라이드



    private static final Logger log = LoggerFactory.getLogger(CalculatorServlet.class);
    //    private ServletConfig servletConfig; // ServletConfig은 서블릿을 생성하고 초기화할 때 전달하는 설정하는 인터페이스

    /*@Override // generic servlet를 사용시에는 init 메서드도 필요 없음
    public void init(ServletConfig servletConfig) throws ServletException {
        // 서블릿의 객체가 생성될 때 호출되는 메서드
        log.info("init");
        this.servletConfig = servletConfig; // 인스턴스 생성
    }*/

    /*@Override // generic servlet를 사용하면 service만 구현하면 됨
    public void service(ServletRequest request, ServletResponse response) throws ServletException, IOException {
        // 서블릿의 객체가 요청될 때 호출되는 메서드
        log.info("service");
        int operand1 = Integer.parseInt(request.getParameter("operand1")); // request.getParameter로 operand1 쿼리스트링을 가져옴
        String operator = request.getParameter("operator");
        int operand2 = Integer.parseInt(request.getParameter("operand2"));

        int result = Calculator.calculate(new PositiveNumber(operand1), operator, new PositiveNumber(operand2));

        PrintWriter writer = response.getWriter();
        writer.println(result);
    }*/

    @Override // HttpServlet 추상 메서드를 사용할려면 protected로 바꾸고 인자를 HttpServletRequest와 HttpServletResponse로 바꾸면 됨
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 서블릿에 GET 메서드가 요청될 때 호출되는 메서드
        log.info("service");
        int operand1 = Integer.parseInt(request.getParameter("operand1")); // request.getParameter로 operand1 쿼리스트링을 가져옴
        String operator = request.getParameter("operator");
        int operand2 = Integer.parseInt(request.getParameter("operand2"));

        int result = Calculator.calculate(new PositiveNumber(operand1), operator, new PositiveNumber(operand2));

        PrintWriter writer = response.getWriter();
        writer.println(result);
    }

    /*@Override // generic servlet를 사용할 시에는 destroy, getServletConfig, getServletInfo는 필요할 때만 선언
    public void destroy() {
        // 자원을 해제해주는 작업을 하는 메서드
        // resource release
    }

    @Override
    public ServletConfig getServletConfig() {
        return this.servletConfig;
    }

    @Override
    public String getServletInfo() {
        return null;
    }*/


}
