package org.example.di;


import org.example.annotation.Controller;
import org.example.annotation.Service;
import org.example.controller.UserController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.reflections.Reflections;

import java.lang.annotation.Annotation;
import java.util.HashSet;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

class BeanFactoryTest {
    private Reflections reflections;
    private BeanFactory beanFactory;

    @BeforeEach // 테스트 메서드가 호출되기 전에 미리 호출 되는 메서드
    void setUp() {
        // UserController, UserService 리턴
        reflections = new Reflections("org.example"); // 리플렉션을 미리 등록
        Set<Class<?>> preInstantiatedClazz = getTypesAnnotatedWith(Controller.class, Service.class);
        beanFactory = new BeanFactory(preInstantiatedClazz);
    }

    private Set<Class<?>> getTypesAnnotatedWith(Class<? extends Annotation>... annotations) { // 매개변수가 몇개가 들어올지 모르기 떄문에 ...로 표현
        Set<Class<?>> beans = new HashSet<>(); // HashSet으로 받아올 중복 없이 클래스를 저장할 변수를 선언
        for (Class<? extends Annotation> annoation : annotations) { // 받아왔다면 반복
            beans.addAll(reflections.getTypesAnnotatedWith(annoation)); // 어노테이션이 붙은 클래스 목록을 반환하고 이를 addAll()로 모두 추가
        }
        return beans;
    }

    @Test
    void diTest() {
        UserController userController = beanFactory.getBean(UserController.class);

        assertThat(userController.getUserSerive()).isNotNull();
    }
}