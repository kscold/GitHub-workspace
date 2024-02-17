package org.example;

import org.apache.catalina.startup.Tomcat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;


public class WebApplicationServer {
    private static final Logger log = LoggerFactory.getLogger(WebApplicationServer.class);

    public static void main(String[] args) throws Exception {
        // 톰캣의 기본 설정
        String webappDirLoaction = "webapps/";
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(8080); // 포트 설정

        tomcat.addWebapp("/", new File(webappDirLoaction).getAbsolutePath()); // 기본 접근 위치
        log.info("configuring app with basedir: {}", new File("./" + webappDirLoaction).getAbsolutePath());

        tomcat.start();
        tomcat.getServer().await();
    }
}
