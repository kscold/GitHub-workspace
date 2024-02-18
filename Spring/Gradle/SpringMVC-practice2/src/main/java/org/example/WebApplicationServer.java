package org.example;

import org.apache.catalina.LifecycleException;

import org.apache.catalina.startup.Tomcat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;

public class WebApplicationServer {

    private static final Logger log = LoggerFactory.getLogger(WebApplicationServer.class); // WebApplicationServer 클래스의 로깅 설정

    public static void main(String[] args) throws LifecycleException {
        String webappDirLocation = "webapps/"; // 톰캣 생성 디렉토리 설정
        Tomcat tomcat = new Tomcat(); // 톰캣 객체 생성
        tomcat.setPort(8080); // 포트 설정

        tomcat.addWebapp("/", new File(webappDirLocation).getAbsolutePath()); // localhost:8080 톰캣 패스 설정
        // 경로를 입력했을 때, File 객체를 통해 webapps/ 의 디렉토리를 루트 디렉토리로 본다는 의미
        log.info("configuring app with basedir: {}", new File("./" + webappDirLocation).getAbsolutePath());

        tomcat.start();
        tomcat.getServer().await();

    }
}