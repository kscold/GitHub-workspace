package com.office.smutify.playlist;

import com.office.smutify.auth.user.AuthUserVo;
import com.office.smutify.song.SongVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.List;

@Service
public class PlaylistService {

    @Autowired
    private PlaylistDao playlistDao;


    public Long createPlaylistAndAdd(Long userId, Long songId) {
        int totalPlaylists = playlistDao.getTotalPlaylistsForUser(userId); // 같은 유저의 플레이 리스트 갯수
        String newPlaylistName = "플레이리스트 " + (totalPlaylists + 1); // 다음 플레이리스트 이름을 설정

        Long newPlaylistId = playlistDao.createPlaylistForUser(userId, totalPlaylists + 1, newPlaylistName);
        playlistDao.addToPlaylist(newPlaylistId, songId);

        return newPlaylistId;
    }

    // 유저의 플레이리스트를 보여주는 서비스
    public List<PlaylistVo> getUserPlaylists() {
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getSession();
        AuthUserVo authUser = (AuthUserVo) session.getAttribute("authUser");
        Long currentUserId = (authUser != null) ? authUser.getUserId() : null;

        if (currentUserId != null) {
            return playlistDao.getUserPlaylists(currentUserId);
        }

        return Collections.emptyList();
    }

    // 기존에 있던 플레이리스트에 추가하는 서비스
    public void addToPlaylist(Long playlistId, Long songId) {
        playlistDao.addToPlaylist(playlistId, songId);
    }


    public PlaylistVo getPlaylistDetails(Long playlistId) {
        return playlistDao.getPlaylistDetails(playlistId);
    }

    // 해당 플레이리스트에 속한 노래 목록을 가져오는 메서드
    public List<SongVo> getSongsInPlaylist(Long userId, Long playlistId) {
        return playlistDao.getSongsInPlaylist(userId, playlistId);
    }

}
