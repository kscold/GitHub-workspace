package org.example.mvc.view;



import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public class JspView implements View {
    private final String name;

    public JspView(String name) {
        this.name = name;
    }
    @Override
    public void render(Map<String, ?> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
        model.forEach(request::setAttribute); // forEach를 돌면서 view로 값을 넘김

        RequestDispatcher requestDispatcher = request.getRequestDispatcher(name); // 포워드할 requestDispatcher 객체 생성
        requestDispatcher.forward(request, response); // 포워드
    }
}
