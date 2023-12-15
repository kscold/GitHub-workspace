package com.office.smutify.playlist;

import com.office.smutify.song.SongVo;

import java.util.List;

public class PlaylistVo {
    private Long id;
    private Long userId; // 플레이리스트 사용자의 아이디
    private String playlistName; // 플레이리스트 이름
    private List<SongVo> songs;  // 플레이리스트에 속한 노래 목록

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getPlaylistName() {
        return playlistName;
    }

    public void setPlaylistName(String playlistName) {
        this.playlistName = playlistName;
    }

    public List<SongVo> getSongs() {
        return songs;
    }

    public void setSongs(List<SongVo> songs) {
        this.songs = songs;
    }


}
