package org.example;

public class QueryString {
    private final String key;
    private final String value;

    public QueryString(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public boolean exists(String key) { // key가 존재하는 지 확인하는 메서드
        return this.key.equals(key);
    }

    public String getValue() { // value를 반환하는 메서드
        return this.value;
    }

}
