package org.example;

import org.example.calculator.domain.Calculator;
import org.example.calculator.domain.PositiveNumber;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.io.*;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

public class ClientRequestHandler implements Runnable {
    private static final Logger logger = LoggerFactory.getLogger(ClientRequestHandler.class);
    private final Socket clientSocket;

    public ClientRequestHandler(Socket clientSocket) { // Socket 생성자
        this.clientSocket = clientSocket;
    }

    @Override
    public void run() {
        /*
         * Step2 - 사용자 요청이 들어올 때마다 Thread를 새로 생성해서 사용자 요청을 처리하도록 한다.
         */
        logger.info("[ClientRequestHandler] new client {} started.", Thread.currentThread().getName()); // 현재 동작하는 Thread의 log를 찍음
        try (InputStream in = clientSocket.getInputStream(); OutputStream out = clientSocket.getOutputStream()) {
            BufferedReader br = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8));
            DataOutputStream dos = new DataOutputStream(out); // 바이너리 값을 재활용할 때 사용


            HttpRequest httpRequest = new HttpRequest(br); // Http 요청을 보내는 사용자 정의 메서드

            // GET calculate?operand1=11&operator=*&operand2=55 HTTP/1.1
            if (httpRequest.isGetRequest() && httpRequest.matchPath("/calculate")) {
                QueryStrings queryStrings = httpRequest.getQueryStrings();

                int operand1 = Integer.parseInt(queryStrings.getValue("operand1")); // Integer.parseInt로 문자를 숫자로 바꿔줌
                String operator = queryStrings.getValue("operator");
                int operand2 = Integer.parseInt(queryStrings.getValue("operand2"));

                int result = Calculator.calculate(new PositiveNumber(operand1), operator, new PositiveNumber(operand2));
                byte[] body = String.valueOf(result).getBytes(); // 결과 값(숫자)를 byte 배열로 변환

                HttpResponse response = new HttpResponse(dos);
                response.response200Header("application/json", body.length);
                response.responseBody(body);
            }
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
    }
}