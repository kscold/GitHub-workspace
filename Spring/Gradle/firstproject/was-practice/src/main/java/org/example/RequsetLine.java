package org.example;

import java.util.Objects;

// GET /calculate?operand1=11&operator=*&operand2=55 HTTP/1.1
public class RequsetLine {
    private final String method; // GET
    private final String urlPath; // /calculate
    private QueryStrings queryStrings; // operand1=11&operator=*&operand2=55


    public RequsetLine(String method, String urlPath, String queryStrings) {
        this.method = method;
        this.urlPath = urlPath;
        this.queryStrings = new QueryStrings(queryStrings); // queryString를 분해하여 key value로 바꿀 수 있는 QueryStrings 객체로 선언
    }

    public RequsetLine(String requestLine) { // 처음 requestLine을 이 메서드로 거치면, 메서드 URL, URI 잘라짐

        String[] tokens = requestLine.split(" ");
        this.method = tokens[0]; // 메서드 추출
        String[] urlPathTokens = tokens[1].split("\\?");
        this.urlPath = urlPathTokens[0]; // /calculate URI 추출

        if (urlPathTokens.length == 2) { // split 한 것이 2개라면
            this.queryStrings = new QueryStrings(urlPathTokens[1]);
        }

    }

    public boolean isGetRequest() { // GET 요청인지 확인하는 메서드
        return "GET".equals(this.method);
    }

    public boolean matchPath(String requestPath) {
        return urlPath.equals(requestPath);
    }

    public QueryStrings getQueryStrings() {
        return this.queryStrings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RequsetLine that = (RequsetLine) o;
        return Objects.equals(method, that.method) && Objects.equals(urlPath, that.urlPath) && Objects.equals(queryStrings, that.queryStrings);
    }

    @Override
    public int hashCode() {
        return Objects.hash(method, urlPath, queryStrings);
    }
}
