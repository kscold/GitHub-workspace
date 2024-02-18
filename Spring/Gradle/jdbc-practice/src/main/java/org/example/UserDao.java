package org.example;


import java.sql.*;

public class UserDao {


    public void create(User user) throws SQLException {
        // sql문을 주입받지 않는 메서드
        Connection con = null; // 초기 Connection 객체 정의
        PreparedStatement pstmt = null; // 테이블 연결을 하기 위한 PreparedStatement 객체 정의(반복적인 쿼리에 용이)

        try {
            con = ConnectionManger.getConnection(); // 연결을 하는 정의 된 메서드를 Connection 객체에 정의
            String sql = "INSERT INTO USERS VALUES (?, ?, ?, ?)"; // USERS 테이블에 원하는 placeholder 값을 대입하기 위한 sql
            pstmt = con.prepareStatement(sql); // sql을 쿼리로 연결
            pstmt.setString(1, user.getUserId()); // 각 placeholder index에 들어갈 값을 적용(user 객체의 userId를 가져옴)
            pstmt.setString(2, user.getPassword());
            pstmt.setString(3, user.getName());
            pstmt.setString(4, user.getEmail());

            pstmt.executeUpdate(); // 쿼리를 실행
        } finally {
            if (pstmt != null) { // 쿼리 실행 값이 null이 아니면(값이 있다면)
                pstmt.close(); // PreparedStatement 객체를 삭제
            }

            if (con != null) { // Connction 객체가 null이 아니면(연결이 있었다면)
                con.close(); // Connction 객체 삭제
            }
        }
    }

    public void create2(User user) throws SQLException {
        // sql을 주입받을 수 있는 Jdbc Template 라이브러리의 내부 동작을 흉내낸 메서드
        JdbcTemplate jdbcTemplate = new JdbcTemplate();

        String sql = "INSERT INTO USERS VALUES (?, ?, ?, ?)";
        jdbcTemplate.executeUpdate(user, sql, new PreparedStatementSetter() { // 내가 정의한 PreparedStatementSetter 인터페이스 객체 생성
            @Override // 내가 정의한 PreparedStatementSetter 인터페이스 메서드 오버라이딩
            public void setter(PreparedStatement pstmt) throws SQLException {
                pstmt.setString(1, user.getUserId()); // 각 placeholder index에 들어갈 값을 적용(user 객체의 userId를 가져옴)
                pstmt.setString(2, user.getPassword());
                pstmt.setString(3, user.getName());
                pstmt.setString(4, user.getEmail());
            }
        });
    }

    public User findByUserId(String userId) throws SQLException {
        Connection con = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            con = ConnectionManger.getConnection();
            String sql = "SELECT userId, password, name, email FROM USERS WHERE userId = ?";
            pstmt = con.prepareStatement(sql);
            pstmt.setString(1, userId);

            rs = pstmt.executeQuery();

            User user = null;
            if (rs.next()) { // ResultSet의 값이 하나다로 있다면
                user = new User(rs.getString("userId"),
                        rs.getString("password"),
                        rs.getString("name"),
                        rs.getString("email")
                ); // user 객체의 쿼리에 반환된 객체를 대입
            }

            return user;
        } finally {
            if (rs != null) {
                rs.close();
            }

            if (pstmt != null) {
                pstmt.close();
            }

            if (con != null) {
                con.close();
            }
        }
    }

    public User findByUserId2(String userId) throws SQLException {
        JdbcTemplate jdbcTemplate = new JdbcTemplate();
        String sql = "SELECT userId, password, name, email FROM USERS WHERE userId = ?";
        return (User) jdbcTemplate.executeQeury(sql, // (User) Object로 타입 캐스팅
                pstmt -> pstmt.setString(1, userId),
                rs -> new User(
                        rs.getString("userId"),
                        rs.getString("password"),
                        rs.getString("name"),
                        rs.getString("email")
                ));
    }
}
