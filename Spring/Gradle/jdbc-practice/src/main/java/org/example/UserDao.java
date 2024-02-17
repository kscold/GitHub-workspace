package org.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserDao {
 private Connection getConnection(){
     String url = "jdbc:h2:mem://localhost/~/jdbc-practice;MODE=MySQL;DB_CLOSE_DELAY=-1";
     String id = "sa";
     String pw = "";

     try {
         Class.forName("org.h2.Driver");
         return DriverManager.getConnection(url, id, pw);
     } catch (Exception exception) {
         return null;
     }
 }


    public void create(User user) throws SQLException {
        Connection con = null;
        PreparedStatement pstmt = null;

        try {
            con = getConnection();
            String sql = "INSERT INTO USERS VALUES (?, ?, ?, ?)"; // USERS 테이블에 값을 대입
            pstmt = con.prepareStatement(sql);
            pstmt.setString(1, user.getUserId());

        }finally {

        }
    }

    public User findByUserId(String wirzard) {
    }
}
