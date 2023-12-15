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

    // 노래를 검색하는 메소드
    public List<SearchVo> searchSongs(String keyword, String sortBy) {
        System.out.println("[SearchDao] searchSongs()");

        String sql = "SELECT DISTINCT * FROM song_table WHERE singer LIKE ? OR title LIKE ? OR genre LIKE ?";

        // 정렬 기준이 지정되어 있다면 정렬을 추가
        if (sortBy != null && !sortBy.isEmpty()) {
            sql += " ORDER BY " + sortBy;
        }

        // 검색어를 SQL LIKE 패턴에 맞게 설정
        String searchKeyword = "%" + keyword + "%";

        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(SearchVo.class), searchKeyword, searchKeyword, searchKeyword);
    }

}

