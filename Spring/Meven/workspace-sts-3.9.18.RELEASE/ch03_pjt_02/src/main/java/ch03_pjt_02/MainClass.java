package ch03_pjt_02;

import org.springframework.context.support.GenericXmlApplicationContext;

public class MainClass {
    public static void main(String[] args) {
        GenericXmlApplicationContext ctx = new GenericXmlApplicationContext("classpath:applicationContext.xml");

        // 빈을 가져와서 사용
        TransportationWalk transportationWalk = ctx.getBean("tWalk", TransportationWalk.class);
        transportationWalk.move();

        // 컨텍스트를 닫음
        ctx.close();
    }
}