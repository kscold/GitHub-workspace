package org.example.mvc.view;

import static org.example.mvc.view.RedirectView.DEFAULT_REDIRECT_PREFIX;

public class JspViewResolver implements ViewResolver {

    @Override
    public View resolveView(String viewName) {
        if (viewName.startsWith(DEFAULT_REDIRECT_PREFIX)) { // 만약 "redirect:"로 시작한다면
            return new RedirectView(viewName); // 뷰 이름을 담은  RedirectView 객체를 반환
        }
        return new JspView(viewName + ".jsp");
    }
}
