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


    // 새로운 플레이리스트를 생성하고 음악을 추가하는 서비스 메소드
    public Long createPlaylistAndAdd(Long userId, Long songId) {
        System.out.println("[PlaylistService] createPlaylistAndAdd()");

        // 같은 유저의 플레이 리스트 갯수를 가져와서 새로운 플레이리스트 이름을 설정
        int totalPlaylists = playlistDao.getTotalPlaylistsForUser(userId);
        String newPlaylistName = "플레이리스트 " + (totalPlaylists + 1);

        // 새로운 플레이리스트를 생성하고 음악을 추가한 후, 해당 플레이리스트의 ID를 반환
        Long newPlaylistId = playlistDao.createPlaylistForUser(userId, totalPlaylists + 1, newPlaylistName);
        playlistDao.addToPlaylist(newPlaylistId, songId);

        return newPlaylistId;
    }

    // 유저의 플레이리스트 목록을 가져오는 서비스 메소드
    public List<PlaylistVo> getUserPlaylists() {
        System.out.println("[PlaylistService] createPlaylistAndAdd()");

        // 현재 세션에서 사용자 정보를 가져오고, 사용자가 없을 경우 빈 리스트 반환
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getSession();
        AuthUserVo authUser = (AuthUserVo) session.getAttribute("authUser");
        Long currentUserId = (authUser != null) ? authUser.getUserId() : null;

        if (currentUserId != null) {
            return playlistDao.getUserPlaylists(currentUserId);
        }

        return Collections.emptyList();
    }

    // 기존 플레이리스트에 노래를 추가하는 서비스 메소드
    public void addToPlaylist(Long playlistId, Long songId) {
        System.out.println("[PlaylistService] addToPlaylist()");

        playlistDao.addToPlaylist(playlistId, songId);
    }


    // 플레이리스트의 세부 정보를 가져오는 서비스 메소드
    public PlaylistVo getPlaylistDetails(Long playlistId) {
        System.out.println("[PlaylistService] getPlaylistDetails()");

        return playlistDao.getPlaylistDetails(playlistId);
    }

    // 특정 플레이리스트에 속한 노래 목록을 가져오는 서비스 메소드
    public List<SongVo> getSongsInPlaylist(Long userId, Long playlistId) {
        System.out.println("[PlaylistService] getSongsInPlaylist()");

        return playlistDao.getSongsInPlaylist(userId, playlistId);
    }

}
