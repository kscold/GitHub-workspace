package org.example.mvc.filter;

import javax.servlet.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;


@WebFilter("/*") // 모든 패스 요청 대해서 반응
public class CharacterEncodingFilter implements Filter {
    public static final String DEFAULT_ENCODING = "UTF-8";

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        request.setCharacterEncoding(DEFAULT_ENCODING);
        response.setCharacterEncoding(DEFAULT_ENCODING);

        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {

    }
}
