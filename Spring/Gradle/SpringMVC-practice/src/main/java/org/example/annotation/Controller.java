package org.example.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE}) // TYPE(클래스)에 어노테이션을 정의할 수 있는 어노테이션
@Retention(RetentionPolicy.RUNTIME) // 유지 기간을 런타임 기간동안 유지
public @interface Controller {
}
