package org.example.mvc;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class AnnotationHandler {
    private final Class<?> clazz;
    private final Method targetMethod;

    public AnnotationHandler(Class<?> clazz, Method targetMethod) {
        this.clazz = clazz;
        this.targetMethod = targetMethod;
    }

    public String handle(HttpServletRequest request, HttpServletResponse response) throws Exception {
        Constructor<?> defaultConstructor = clazz.getDeclaredConstructor(); // 새 인스턴스를 생성, clazz의 기본 생성자를 사용
        Object handler = defaultConstructor.newInstance(); // defaultConstructor를 호출하고, 해당 메서드의 결과를 반환

        return (String) targetMethod.invoke(handler, request, response); // 어노테이션 이름을 String으로 반환
    }
}
