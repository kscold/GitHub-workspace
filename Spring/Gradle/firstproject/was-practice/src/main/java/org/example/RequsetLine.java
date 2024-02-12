package org.example;

import java.util.Objects;

// GET /calculate?operand1=11&operator=*&operand2=55 HTTP/1.1
public class RequsetLine {
    private final String method; // GET
    private final String urlPath; // /calculate
    private String queryString; // operand1=11&operator=*&operand2=55

    public RequsetLine(String method, String urlPath, String queryString) {
        this.method = method;
        this.urlPath = urlPath;
        this.queryString = queryString;
    }

    public RequsetLine(String requestLine) {

        String[] tokens = requestLine.split(" ");
        this.method = tokens[0]; // 메서드 추출
        String[] urlPathTokens = tokens[1].split("\\?");
        this.urlPath = urlPathTokens[0]; // /calculate URI 추출

        if (urlPathTokens.length == 2) { // split 한 것이 2개라면
            this.queryString = urlPathTokens[1];
        }

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RequsetLine that = (RequsetLine) o;
        return Objects.equals(method, that.method) && Objects.equals(urlPath, that.urlPath) && Objects.equals(queryString, that.queryString);
    }

    @Override
    public int hashCode() {
        return Objects.hash(method, urlPath, queryString);
    }
}
