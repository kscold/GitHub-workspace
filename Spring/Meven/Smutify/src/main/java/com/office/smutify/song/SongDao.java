package com.office.smutify.song;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class SongDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 노래의 상세 정보를 가져오는 쿼리
    public SongVo getSongDetails(Long songId) {
        System.out.println("[SongDao] getSongDetails()");

        String sql = "SELECT id, singer, title, genre FROM song_table WHERE id = ?";

        return jdbcTemplate.queryForObject(sql, new Object[]{songId}, (rs, rowNum) -> {
            SongVo song = new SongVo();
            song.setId(rs.getLong("id"));
            song.setSinger(rs.getString("singer"));
            song.setTitle(rs.getString("title"));
            song.setGenre(rs.getString("genre"));
            return song;
        });
    }

    public void addGenre(Long songId, String genre) {
        String sql = "UPDATE song_table SET genre = ? WHERE id = ?";
        jdbcTemplate.update(sql, genre, songId);
    }
}
