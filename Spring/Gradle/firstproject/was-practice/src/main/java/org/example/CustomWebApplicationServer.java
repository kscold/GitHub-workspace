package org.example;

import org.example.calculator.domain.Calculator;
import org.example.calculator.domain.PositiveNumber;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CustomWebApplicationServer {
    private final int port; // 일반 상수 선언

    private final ExecutorService executorService = Executors.newFixedThreadPool(10);
    private static final Logger logger = LoggerFactory.getLogger(CustomWebApplicationServer.class); // 모든 인스턴스가 동일한 상수를 가짐

    public CustomWebApplicationServer(int port) {
        this.port = port;
    }

    public void start() throws IOException {
        try (ServerSocket serverSocket = new ServerSocket(port)) { // 해당하는 포트로 서버를 띄움
            logger.info("[CostomWebApplicationServer] started {} port.", port);

            Socket clientSocket;
            logger.info("[CustomWebApplicationServer] waiting for client.");

            while ((clientSocket = serverSocket.accept()) != null) { // 서버 소켓이 클라이언트를 accept 메서드로 기다리게함(즉, null 이 아님)
                logger.info("[CustomWebApplicationServer] client connected!");

                /*

                 * Step1 - 사용자 요청을 메인 Thread가 처리하도록 한다.
                 */

                /*
                String line; // 프로토콜을 보여주는 로직
                while ((line = br.readLine()) != "") { // 라인별로 입력 받은 값이 비어있지 않으면
                    System.out.println(line); // 입렵 받은 값을 출력
                }
                 */

                new Thread(new ClientRequestHandler(clientSocket)).start(); // 클라이언트가 연결될 때마다 새로운 쓰레드를 생성
            }
        }
    }

}

