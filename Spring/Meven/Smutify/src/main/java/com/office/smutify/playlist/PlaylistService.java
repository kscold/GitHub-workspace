package com.office.smutify.playlist;

import com.office.smutify.auth.user.AuthUserVo;
import com.office.smutify.data.SongVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class PlaylistService {

    @Autowired
    private PlaylistDao playlistDao;


    public void addToPlaylist(Long playlistId, Long songId) {
        playlistDao.addToPlaylist(playlistId, songId);
    }


    public Long createPlaylistAndAdd(Long userId, Long songId) {
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getSession();
//        AuthUserVo authUser = (AuthUserVo) session.getAttribute("authUser");


        // 세션에 사용자 정보가 없다면 특정 값으로 대체
//        String currentUserId = (authUser != null) ? authUser.getUsername() : null;


        int totalPlaylists = playlistDao.getTotalPlaylistsForUser(userId); // 같은 유저의 플레이 리스트 갯수
        String newPlaylistName = "플레이리스트 " + (totalPlaylists + 1); // 다음 플레이리스트 이름을 설정

        Long newPlaylistId = playlistDao.createPlaylistForUser(userId, totalPlaylists + 1, newPlaylistName);
        playlistDao.addToPlaylist(newPlaylistId, songId);

        return newPlaylistId;
    }


    public PlaylistVo getPlaylistDetails(Long playlistId) {
        return playlistDao.getPlaylistDetails(playlistId);
    }

    public List<SongVo> getSongsInPlaylist(Long playlistId) {
        return playlistDao.getSongsInPlaylist(playlistId);
    }

}
