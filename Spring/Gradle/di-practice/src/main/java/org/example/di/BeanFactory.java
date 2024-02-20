package org.example.di;

import org.example.annotation.Inject;
import org.example.controller.UserController;
import org.reflections.ReflectionUtils;
import org.reflections.Reflections;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.*;

public class BeanFactory {
    private final Set<Class<?>> preInstantiatedClazz;
    private Map<Class<?>, Object> beans = new HashMap<>();

    public BeanFactory(Set<Class<?>> preInstantiatedClazz) {
        this.preInstantiatedClazz = preInstantiatedClazz;
        initialize();
    }

    private void initialize() {
        for (Class<?> clazz : preInstantiatedClazz) {
            Object instance = createInstance(clazz);
            beans.put(clazz, instance);
        }
    }

    // UserController
    // UserService
    private Object createInstance(Class<?> clazz) {
        // 생성자
        Constructor<?> constructor = findConstructor(clazz); // 생성자를 가지고 오는 코드

        // 파라미터
        List<Object> parameters = new ArrayList<>();
        for (Class<?> typeClass : constructor.getParameterTypes()) {
            // UserService
            parameters.add(getPrarameterByClass(typeClass)); // 매개변수에 해당하는 인스턴스를 가지고 옴
        }
        // 인스턴스 생성
        try {
            return constructor.newInstance(parameters.toArray());
        } catch (InstantiationException | IllegalAccessException | InvocationTargetException e) {
            throw new RuntimeException(e);
        }

    }

    private Constructor<?> findConstructor(Class<?> clazz) {
        Constructor<?> constructor = BeanFactoryUtils.getInjectedConstructor(clazz); // @Inject가 붙은 어노테이션을 가지고 오도록하는 코드

        if (Objects.nonNull(constructor)) { // 만약 객체들이 null이 아니면
            return constructor;
        }
        return clazz.getConstructors()[0]; // 첫전째 clazz 객체를 반환
    }

    private Object getPrarameterByClass(Class<?> typeClass) {
        Object instanceBean = getBean(typeClass);

        if (Objects.nonNull(instanceBean)) {
            return instanceBean;
        }

        return createInstance(typeClass);
    }


    public <T> T getBean(Class<T> requiredType) { // 제네릭 타입이고 제네릭으로 반환
        return (T) beans.get(requiredType);
    }
}
