package com.office.smutify.playlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.Objects;

@Component
public class PlaylistDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void addToPlaylist(Long playlistId, Long songId) {
        // Implement SQL to add the song to the playlist
        String sql = "INSERT INTO playlist_song (playlist_id, song_id) VALUES (?, ?)";
        jdbcTemplate.update(sql, playlistId, songId);
    }

    public Long createPlaylist() {
        // Implement SQL to create a new playlist and return its ID
        String sql = "INSERT INTO user_playlist (playlist_name) VALUES ('New Playlist')";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update((PreparedStatementCreator) con -> {
            PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            return ps;
        }, keyHolder);
        return Objects.requireNonNull(keyHolder.getKey()).longValue();
    }

    public PlaylistVo getPlaylistDetails(Long playlistId) {
        String sql = "SELECT id, playlist_name FROM user_playlist WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{playlistId}, (rs, rowNum) -> {
            PlaylistVo playlist = new PlaylistVo();
            playlist.setId(rs.getLong("id"));
            playlist.setPlaylistName(rs.getString("playlist_name"));
            // 추가적인 필드 설정이 필요한 경우에는 여기에 추가

            return playlist;
        });
    }
}
