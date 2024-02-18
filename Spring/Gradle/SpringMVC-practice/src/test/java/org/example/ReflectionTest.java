package org.example;

import org.example.annotation.Controller;
import org.example.annotation.Service;
import org.example.model.User;
import org.junit.jupiter.api.Test;
import org.reflections.Reflections;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.lang.annotation.Annotation;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

/*
 * @Controller 어노테이션이 설정돼 있는 모든 클래스를 찾아서 출력
 */
public class ReflectionTest {
    private static final Logger logger = LoggerFactory.getLogger(ReflectionTest.class);

    @Test
    void controllerScan() {
        Set<Class<?>> beans = getTypesAnnotatedWith(List.of(Controller.class, Service.class)); // @Controller와 @Service 어노테이션이 붙은 클래스를 찾음

        logger.debug("beans: [{}]", beans);

    }

    @Test
    void showClass() {

        Class<User> clazz = User.class;
        logger.debug(clazz.getName());

        logger.debug("User all declared fields: [{}]", Arrays.stream(clazz.getDeclaredFields()).collect(Collectors.toList()));
        logger.debug("User all declared constructors: [{}]", Arrays.stream(clazz.getDeclaredConstructors()).collect(Collectors.toList()));
        logger.debug("User all declared methods: [{}]", Arrays.stream(clazz.getDeclaredMethods()).collect(Collectors.toList()));
    }

    @Test
    void load() throws ClassNotFoundException {
        // 힙 영역에 로드되어 있는 클래스 타입 객체를 가지고 오는 방법
        // 1.
        Class<User> clazz = User.class;


        // 2.
        User user = new User("serverewizard", "김승찬");
        Class<? extends User> clazz2 = user.getClass();

        // 3.
        Class<?> clazz3 = Class.forName("org.example.model.User");

        logger.debug("clazz: [{}]", clazz);
        logger.debug("clazz2: [{}]", clazz2);
        logger.debug("clazz3: [{}]", clazz3);

        assertThat(clazz == clazz2).isTrue();
        assertThat(clazz2 == clazz3).isTrue();
        assertThat(clazz3 == clazz).isTrue();
    }

    private Set<Class<?>> getTypesAnnotatedWith(List<Class<? extends Annotation>> annotations) {
        Reflections reflections = new Reflections("org.example"); // org.example에서 Reflections 객체를 생성

        Set<Class<?>> beans = new HashSet<>(); // HashSet으로 Set 아무 클래스를 받을 수 있는 집합을 생성(beans 등록을 흉내내기 위하여 만듬)
        annotations.forEach(annotation -> beans.addAll((reflections.getTypesAnnotatedWith(annotation))));

        return beans;
    }
}