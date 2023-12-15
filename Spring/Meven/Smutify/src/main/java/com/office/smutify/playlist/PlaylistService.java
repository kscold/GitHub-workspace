package com.office.smutify.playlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlaylistService {

    @Autowired
    private PlaylistDao playlistDao;

    public void addToPlaylist(Long playlistId, Long songId) {
        // Implement logic to add the song to the existing playlist
        playlistDao.addToPlaylist(playlistId, songId);
    }

    public Long createPlaylistAndAdd(Long songId) {
        // Implement logic to create a new playlist and add the song to it
        Long newPlaylistId = playlistDao.createPlaylist(); // Assume you have a method to create a new playlist
        playlistDao.addToPlaylist(newPlaylistId, songId);
        return newPlaylistId;
    }

    public PlaylistVo getPlaylistDetails(Long playlistId) {
        // Implement logic to get playlist details from the database
        return playlistDao.getPlaylistDetails(playlistId);
    }

}
