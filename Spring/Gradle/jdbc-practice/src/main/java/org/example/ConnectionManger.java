package org.example;

import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;

public class ConnectionManger {
    public static DataSource getDataSource(){
        HikariDataSource hikariDataSource = new HikariDataSource(); // HikariCP를 사용
        hikariDataSource.setDriverClassName("org.h2.Driver");
        hikariDataSource.setJdbcUrl("jdbc:h2:mem://localhost/~/jdbc-practice;MODE=MySQL;DB_CLOSE_DELAY=-1");
        hikariDataSource.setUsername("sa");
        hikariDataSource.setUsername("");
        hikariDataSource.setPassword("");

        return hikariDataSource;
    }
}
