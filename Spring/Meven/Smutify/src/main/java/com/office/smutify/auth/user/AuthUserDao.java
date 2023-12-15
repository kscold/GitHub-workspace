package com.office.smutify.auth.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class AuthUserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public AuthUserVo findByUsername(String username) {
        System.out.println("[AuthUserDao] findByUsername()");

        String sql = "SELECT * FROM users WHERE username = ?";

        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{username}, new BeanPropertyRowMapper<>(AuthUserVo.class));
        } catch (Exception e) {
            return null;
        }
    }

    public AuthUserVo findByUserId(Long userId) {
        System.out.println("[AuthUserDao] findByUserId()");

        String sql = "SELECT * FROM users WHERE user_id = ?";

        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{userId}, new BeanPropertyRowMapper<>(AuthUserVo.class));
        } catch (Exception e) {
            return null;
        }
    }

    public void save(AuthUserVo authUser) {
        System.out.println("[AuthUserDao] save()");

        String sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        jdbcTemplate.update(sql, authUser.getUsername(), authUser.getPassword());
    }
}
