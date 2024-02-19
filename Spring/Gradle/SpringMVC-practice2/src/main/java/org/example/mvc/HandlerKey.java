package org.example.mvc;

import org.example.mvc.controller.RequestMethod;

import java.util.Objects;

public class HandlerKey {
    private final RequestMethod requestMethod;
    private final String uriPath;

    public HandlerKey(RequestMethod requestMethod, String uriPath) { // 추출한 메서드와 uri 인스턴스를 매칭
        this.requestMethod = requestMethod;
        this.uriPath = uriPath;
    }

    // 객체 비교를 위해 hashcode 반환
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HandlerKey that = (HandlerKey) o;
        return requestMethod == that.requestMethod && Objects.equals(uriPath, that.uriPath);
    }

    @Override
    public int hashCode() {
        return Objects.hash(requestMethod, uriPath);
    }
}
