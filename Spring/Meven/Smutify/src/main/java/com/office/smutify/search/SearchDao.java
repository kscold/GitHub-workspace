package com.office.smutify.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SearchDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    public List<SearchVo> searchSongs(String keyword, String sortBy) {
        String sql = "SELECT * FROM song_table WHERE singer LIKE ? OR title LIKE ? OR genre LIKE ? GROUP BY singer, title, genre ORDER BY " + sortBy;
        String searchKeyword = "%" + keyword + "%";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(SearchVo.class), searchKeyword, searchKeyword, searchKeyword);
    }

}

