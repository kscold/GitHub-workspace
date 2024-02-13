package org.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.net.http.HttpHeaders;

public class HttpRequest {
    private final RequsetLine requsetLine;

    /*
    // 실제 톰캣과 같이 요청의 동작이 작동했을려면 아래와 같이 헤더와 body도 있었어야 함
    private final HttpHeaders httpHeaders;
    private final Body body;
    */
    public HttpRequest(BufferedReader br) throws IOException {
        this.requsetLine = new RequsetLine(br.readLine()); // br.readLine() 버퍼리더로 받은 스트림으로부터 한줄을 읽어 문자열로 리턴한다.
    }

    public boolean isGetRequest() {
        return requsetLine.isGetRequest();
    }

    public boolean matchPath(String path) {
        return requsetLine.matchPath(path);
    }


    public QueryStrings getQueryStrings() {
        return requsetLine.getQueryStrings();
    }
}
