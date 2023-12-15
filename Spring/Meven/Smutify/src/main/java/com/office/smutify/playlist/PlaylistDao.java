package com.office.smutify.playlist;

import com.office.smutify.data.SongVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import java.util.Objects;

@Component
public class PlaylistDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    // 플레이리스트 id와 songid를 playlist_song에 넣는 쿼리
//    public void addToPlaylist(Long playlistId, Long songId) {
//        // Implement SQL to add the song to the playlist
//        String sql = "INSERT INTO playlist_song (playlist_id, song_id) VALUES (?, ?)";
//        jdbcTemplate.update(sql, playlistId, songId);
//    }

    public void addToPlaylist(Long playlistId, Long songId) {
        // Check if the playlistId exists in user_playlist table
        String checkPlaylistSql = "SELECT COUNT(*) FROM user_playlist WHERE id = ?";
        int playlistCount = jdbcTemplate.queryForObject(checkPlaylistSql, Integer.class, playlistId);

        if (playlistCount == 0) {
            // Playlist with the given ID does not exist
            throw new IllegalArgumentException("Playlist with ID " + playlistId + " does not exist.");
        }

        // Implement SQL to add the song to the playlist
        String sql = "INSERT INTO playlist_song (playlist_id, song_id) VALUES (?, ?)";
        jdbcTemplate.update(sql, playlistId, songId);
    }


    public Long createPlaylist(String playlistName) {
        String sql = "INSERT INTO user_playlist (playlist_name) VALUES (?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update((PreparedStatementCreator) con -> {
            PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, playlistName); // 변수로 받아온 값을 사용하여 설정
            return ps;
        }, keyHolder);
        return Objects.requireNonNull(keyHolder.getKey()).longValue();
    }

    public void updatePlaylistName(Long playlistId, String playlistName) {
        String sql = "UPDATE user_playlist SET playlist_name = ? WHERE id = ?";
        jdbcTemplate.update(sql, playlistName, playlistId);
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

    public List<SongVo> getSongsInPlaylist(Long playlistId) {
        String sql = "SELECT s.id, s.singer, s.title, s.genre FROM song_table s " +
                "JOIN playlist_song ps ON s.id = ps.song_id " +
                "WHERE ps.playlist_id = ?";
        return jdbcTemplate.query(sql, new Object[]{playlistId}, (rs, rowNum) -> {
            SongVo song = new SongVo();
            song.setId(rs.getLong("id"));
            song.setSinger(rs.getString("singer"));
            song.setTitle(rs.getString("title"));
            song.setGenre(rs.getString("genre"));
            return song;
        });
    }

    // 유저당 플레이리스트 총 갯수를 구하는 쿼리
    public int getTotalPlaylistsForUser(Long userId) {
        String sql = "SELECT COUNT(*) FROM user_playlist WHERE user_id = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, userId);
    }

    // 플레이 리스트 총 갯수 구하는 쿼리
    public int getTotalPlaylists() {
        String sql = "SELECT COUNT(*) FROM user_playlist";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

//    public Long createPlaylistForUser(String userId, String playlistName) {
//        String sql = "INSERT INTO user_playlist (user_id, playlist_name) VALUES (?, ?)";
//        jdbcTemplate.update(sql, userId, playlistName);
//
//        // 해당 플레이리스트의 ID 가져오기
//        sql = "SELECT LAST_INSERT_ID()";
//        return jdbcTemplate.queryForObject(sql, Long.class);
//    }

//    public Long createPlaylistForUser(Long userId, String playlistName) {
//        String sql = "INSERT INTO user_playlist (user_id, playlist_name) VALUES (?, ?)";
//
//        KeyHolder keyHolder = new GeneratedKeyHolder();
//        jdbcTemplate.update(
//                connection -> {
//                    PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
//                    ps.setLong(1, userId);
//                    ps.setString(2, playlistName);
//                    return ps;
//                },
//                keyHolder
//        );
//        return keyHolder.getKey().longValue();
//    }


    // 새로운 플레리 리스트에 추가를 눌렀을 때 동작하는 쿼리
    public Long createPlaylistForUser(Long userId, int playlistId, String playlistName) {
        String sql = "INSERT INTO user_playlist (user_id, playlist_id, playlist_name) VALUES (?, ?, ?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                    ps.setLong(1, userId);
                    ps.setLong(2, playlistId);
                    ps.setString(3, playlistName);
                    return ps;
                },
                keyHolder
        );
        return keyHolder.getKey().longValue();
    }


}
