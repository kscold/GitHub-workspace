package org.example.mvc;

import org.example.mvc.annotation.RequestMapping;

import org.example.mvc.controller.RequestMethod;
import org.reflections.Reflections;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class AnnotationHandlerMapping implements HandlerMapping {
    private final Object[] basePackage;
    private Map<HandlerKey, AnnotationHandler> handlers = new HashMap<>();

    public AnnotationHandlerMapping(Object... basePackage) {
        this.basePackage = basePackage;
    }

    public void initialize() {
        Reflections reflections = new Reflections(basePackage);

        // HomeController
        Set<Class<?>> clazzesWithControllerAnnotation = reflections.getTypesAnnotatedWith(org.example.mvc.annotation.Controller.class); // @Controller 어노테이션이 붙어있는 객체가 전부 넘어옴

        clazzesWithControllerAnnotation.forEach(clazz ->
                Arrays.stream(clazz.getDeclaredMethods()).forEach(declearedMethod -> { // 또 그 메서드 중에 DeclaredMethods 대상을 추출 후
                    RequestMapping requestMapping = declearedMethod.getDeclaredAnnotation(RequestMapping.class); // @RequestMapping 어노테이션이 붙은 것을 찾아서 반환

                    // @RequestMapping(value = "/", method = RequestMethod.GET)
                    Arrays.stream(getRequestMethods(requestMapping)) // 배열 스트림을 생성하여 http 메서드를 반환 받고
                            .forEach(requestMethod -> handlers.put( // http 메서드를 돌면서
                                    new HandlerKey(requestMethod, requestMapping.value()), new AnnotationHandler(clazz, declearedMethod) // @RequestMapping 어노테이션의 requestMethod 종류와 value와를 key:value로 저장
                                    // 이후 AnnotaionHandler를 통해 등록
                            ));

                })
        );
    }

    private RequestMethod[] getRequestMethods(RequestMapping requestMapping) {
        return requestMapping.method();
    }

    @Override
    public Object findHandler(HandlerKey handlerKey) {
        return handlers.get(handlerKey);
    }
}
