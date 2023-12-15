// SongService.java
package com.office.smutify.song;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongService {

    @Autowired
    private SongDao songDao;

    // 노래의 상세 정보를 가져오는 서비스 메소드
    public SongVo getSongDetails(Long songId) {
        System.out.println("[SongService] getSongDetails()");

        return songDao.getSongDetails(songId);
    }

    // 노래에 장르를 추가하는 서비스 메소드
    public void addGenre(Long songId, String genre) {
        System.out.println("[SongService] addGenre()");

        songDao.addGenre(songId, genre);
    }
}
