package org.example;

import static org.assertj.core.api.Assertions.assertThat;

import org.h2.engine.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.datasource.init.DatabasePopulatorUtils;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

public class UserDaoTest {

    @BeforeEach
    void setUp() { // 스프링부트 어플리케이션이 기동될 때 테이블을 생성하고 초기 데이터를 생성하도록 초기화하는 메서드
        ResourceDatabasePopulator populator = new ResourceDatabasePopulator();
        populator.addScript(new ClassPathResource("db_schema.sql")); // DB 테이블 스키마를 추가
        DatabasePopulatorUtils.execute(populator, ConnectionManger.getDataSource()); // DB 연결을 실행

    }

    @Test
    void createTest() {
        UserDao userDao = new UserDao(); // UserDao라는 객체를 생성

        userDao.create(new User("wizard", "password", "name", "email")); // userDao에 유저 정보 저장

        User user = userDao.findByUserId("wirzard"); // 유저 정보가 제대로 저장되었으면 그 정보를 조회해옴
        assertThat(user).isEqualTo(new User("wizard", "password", "name", "email")); // 조회한 정보가 기대값하고 같은지 검증
    }
}
