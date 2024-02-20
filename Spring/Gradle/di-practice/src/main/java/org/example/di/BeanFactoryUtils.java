package org.example.di;

import org.example.annotation.Inject;
import org.reflections.ReflectionUtils;

import java.lang.reflect.Constructor;
import java.util.Set;

public class BeanFactoryUtils {
    public static Constructor<?> getInjectedConstructor(Class<?> clazz) {
        Set<Constructor> injectedConstructors = ReflectionUtils.getAllConstructors(clazz, ReflectionUtils.withAnnotation(Inject.class));
        // clazz 타입 객체의 모든 생성자를 가지고 오는데, @Inject 어노테이션이 붙은 생성자만 가지공 옴
        if (injectedConstructors.isEmpty()) {
            return null;
        }
        return injectedConstructors.iterator().next(); // 값이 있으면 반복해서 리턴
    }
}
