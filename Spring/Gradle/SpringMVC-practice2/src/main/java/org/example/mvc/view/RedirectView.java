package org.example.mvc.view;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public class RedirectView implements View {
    public static final String DEFAULT_REDIRECT_PREFIX = "redirect:";
    private final String name;

    public RedirectView(String name) {
        this.name = name;
    }

    @Override
    public void render(Map<String, ?> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.sendRedirect(name.substring(DEFAULT_REDIRECT_PREFIX.length())); // substring을 통해 "redirect:" 이후 문자열을 리턴

    }
}
