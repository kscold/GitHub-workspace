// SongService.java
package com.office.smutify.song;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongService {

    @Autowired
    private SongDao songDao;

    public SongVo getSongDetails(Long songId) {
        return songDao.getSongDetails(songId);
    }

    public void addGenre(Long songId, String genre) {
        songDao.addGenre(songId, genre);
    }
}
