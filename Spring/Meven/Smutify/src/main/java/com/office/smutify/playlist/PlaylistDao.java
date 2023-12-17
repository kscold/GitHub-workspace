package com.office.smutify.playlist;

import com.office.smutify.song.SongVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Component
public class PlaylistDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    // 플레이리스트 세부 정보 가져오는 쿼리
    public PlaylistVo getPlaylistDetails(Long playlistId) {
        System.out.println("[PlaylistDao] getPlaylistDetails()");

        String sql = "SELECT id, playlist_name FROM user_playlist WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{playlistId}, (rs, rowNum) -> {
            PlaylistVo playlist = new PlaylistVo();
            playlist.setId(rs.getLong("id"));
            playlist.setPlaylistName(rs.getString("playlist_name"));


            return playlist;
        });
    }

    // 플레이리스트에 속한 노래 목록 가져오는 쿼리
    public List<SongVo> getSongsInPlaylist(Long userId, Long playlistId) {
        System.out.println("[PlaylistDao] getSongsInPlaylist()");

        String sql = "SELECT s.id, s.singer, s.title, s.genre " +
                "FROM song_table s " +
                "JOIN playlist_song ps ON s.id = ps.song_id " +
                "WHERE ps.playlist_id = ? AND ps.user_id = ?";
        return jdbcTemplate.query(sql, new Object[]{playlistId, userId}, (rs, rowNum) -> {
            SongVo song = new SongVo();
            song.setId(rs.getLong("id"));
            song.setSinger(rs.getString("singer"));
            song.setTitle(rs.getString("title"));
            song.setGenre(rs.getString("genre"));
            return song;
        });
    }

    // 유저당 플레이리스트 총 갯수 쿼리
    public int getTotalPlaylistsForUser(Long userId) {
        System.out.println("[PlaylistDao] getTotalPlaylistsForUser()");

        String sql = "SELECT COUNT(*) FROM user_playlist WHERE user_id = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, userId);
    }


    // 새로운 플레이리스트에 추가를 눌렀을 때 플레이리스트 생성 및 선택한 노래 한곡 넣는 쿼리
    public Long createPlaylistForUser(Long userId, int playlistId, String playlistName) {
        System.out.println("[PlaylistDao] createPlaylistForUser()");

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

    // 현재 유저의 플레이리스트를 가져오는 쿼리
    public List<PlaylistVo> getUserPlaylists(Long userId) {
        System.out.println("[PlaylistDao] getUserPlaylists()");

        String sql = "SELECT id, user_id, playlist_name FROM user_playlist WHERE user_id = ?";
        return jdbcTemplate.query(sql, new Object[]{userId}, (rs, rowNum) -> {
            PlaylistVo playlist = new PlaylistVo();
            playlist.setId(rs.getLong("id"));
            playlist.setUserId(rs.getLong("user_id"));
            playlist.setPlaylistName(rs.getString("playlist_name"));
            return playlist;
        });
    }


    // 기존에 존재하는 플레이리스트에 노래 추가하는 쿼리
    public void addToPlaylist(Long playlistId, Long songId) {
        System.out.println("[PlaylistDao] addToPlaylist()");

        String sql = "INSERT INTO playlist_song (playlist_id, song_id, song_singer, song_title, song_genre) " +
                "SELECT ?, s.id, s.singer, s.title, s.genre " +
                "FROM song_table s " +
                "WHERE s.id = ?";

        jdbcTemplate.update(sql, playlistId, songId);
    }

}