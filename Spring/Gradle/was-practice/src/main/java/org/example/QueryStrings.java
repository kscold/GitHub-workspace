package org.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class QueryStrings {

    private List<QueryString> queryStrings = new ArrayList<>(); // key value로 쪼갠 값을 저장하는 리스트

    // "*operand=11 operator=* operand2=55"
    public QueryStrings(String queryStringLine) {
        String[] qeuryStringTokens = queryStringLine.split("&"); // & 단위로 URI를 자름
        Arrays.stream(qeuryStringTokens) // 배열 스트림으로 &로 자른 리스트를 순회
                .forEach(queryString -> {
                    String[] values = queryString.split("="); // = 단위로 한번 더 자름
                    if (values.length != 2) { // 자른 단어의 갯수의 2개가 아니라면, 즉 value가 없다면
                        throw new IllegalArgumentException("잘못된 QuerySring 포맷을 가진 문자열입니다.");
                    }
                    queryStrings.add(new QueryString(values[0], values[1]));
                });
    }

    public String getValue(String key) {
        return this.queryStrings.stream()
                .filter(queryString -> queryString.exists(key))
                .map(QueryString::getValue)
                .findFirst()
                .orElse(null);
    }
}