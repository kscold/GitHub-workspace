package org.example;

import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class ConnectionManger {

    public static final String DB_DRIVER = "org.h2.Driver";
    public static final String DB_URL = "jdbc:h2:mem://localhost/~/jdbc-practice;MODE=MySQL;DB_CLOSE_DELAY=-1";
    public static final int MAX_POOL_SIZE = 40;
    private static final DataSource ds;

    static {
        HikariDataSource hikariDataSource = new HikariDataSource(); // HikariCP를 사용
        hikariDataSource.setDriverClassName(DB_DRIVER);
        hikariDataSource.setJdbcUrl(DB_URL);
        hikariDataSource.setUsername("sa");
        hikariDataSource.setUsername("");
        hikariDataSource.setPassword("");
        hikariDataSource.setMaximumPoolSize(MAX_POOL_SIZE); // 커넥션 풀의 최대 크기를 정의(너무 크면 메모리 소모가 높음)
        hikariDataSource.setMinimumIdle(MAX_POOL_SIZE); // 커넥션 풀의 최소 크기를 정의

        ds = hikariDataSource;
    }

    public static Connection getConnection() {
        try {
            return ds.getConnection(); // getDataSource()로부터 정의되어 있는 getConnection() 메서드로 커넥션을 받아옴
        } catch (SQLException e) {
            throw new IllegalStateException(e);
        }
    }

    public static DataSource getDataSource() {
        return ds; // DataSource의 Connection 객체들을 반환
    }

}
