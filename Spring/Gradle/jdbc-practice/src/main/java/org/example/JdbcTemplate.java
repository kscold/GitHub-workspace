package org.example;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JdbcTemplate {

    public void executeUpdate(User user, String sql, PreparedStatementSetter pss) throws SQLException {
        Connection con = null; // 초기 Connection 객체 정의
        PreparedStatement pstmt = null; // 테이블 연결을 하기 위한 PreparedStatement 객체 정의(반복적인 쿼리에 용이)

        try {
            con = ConnectionManger.getConnection(); // 연결을 하는 정의 된 메서드를 Connection 객체에 정의
            pstmt = con.prepareStatement(sql); // 외부로 부터 주입받은 sql로 preparedStatement 객체 생성
            pss.setter(pstmt);

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

    public Object executeQeury(String sql, PreparedStatementSetter pss, RowMapper rowMapper) throws SQLException {
        Connection con = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            con = ConnectionManger.getConnection();
            pstmt = con.prepareStatement(sql);
            pss.setter(pstmt);

            rs = pstmt.executeQuery();

            Object obj = null; // Object로 설정함으로써 User뿐만 아니라 다른 객체 반환도 실행시킬 수 있도록 executeQeury()를 정의
            if (rs.next()) { // ResultSet의 값이 하나라도 있다면
                return rowMapper.map(rs);
            }

            return obj;
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
}


