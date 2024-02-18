package org.example.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE, ElementType.METHOD}) // 해당 어노테이션은 클래스랑 메서드에 붙일 수 있도록 설정
@Retention(RetentionPolicy.RUNTIME)
public @interface RequestMappging {
    String value() default "";

    RequestMethod[] method() default {};

}
