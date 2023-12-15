package com.office.smutify.playlist;

import com.office.smutify.auth.user.AuthUserVo;
import com.office.smutify.data.SongVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/playlist")
public class PlaylistController {

    @Autowired
    private PlaylistService playlistService;

    // Playlist 페이지를 표시하는 메소드
    @GetMapping("/{playlistId}")
    public String playlistPage(@PathVariable Long playlistId, Model model) {
        // 플레이리스트의 세부 정보를 가져옴
        PlaylistVo playlist = playlistService.getPlaylistDetails(playlistId);
        // 플레이리스트 정보를 모델에 추가합니다. 이 정보는 뷰에 사용
        model.addAttribute("playlist", playlist);
        // 플레이리스트 페이지를 표시하는 뷰를 반환
        return "playlist/playlist";
    }

    // 플레이리스트를 불러오는 메소드
    @GetMapping("/playlist/{playlistId}")
    public String getPlaylist(@PathVariable Long playlistId, Model model) {
        // 플레이리스트의 세부 정보를 가져오고, 플레이리스트에 속한 노래 목록 조회
        PlaylistVo playlist = playlistService.getPlaylistDetails(playlistId);
        List<SongVo> songs = playlistService.getSongsInPlaylist(playlistId);
        playlist.setSongs(songs);
        // 플레이리스트 정보를 모델에 추가
        model.addAttribute("playlist", playlist);
        // 새로운 플레이리스트 페이지를 표시하는 뷰를 반환
        return "playlist/new_playlist";
    }

    // 기존 플레이리스트에 음악 추가하는 메소드
    @PostMapping("/add/{playlistId}")
    public String addToPlaylist(@PathVariable Long playlistId, @PathVariable Long songId) {
        // 플레이리스트에 음악을 추가하고, 성공 시 플레이리스트 페이지로 리다이렉트
        playlistService.addToPlaylist(playlistId, songId);
        return "redirect:/playlist/playlist";
    }

    // 새로운 플레이리스트 생성 및 음악 추가하는 메소드
    @PostMapping("/create/{songId}")
    public String createPlaylistAndAdd(@PathVariable Long songId, Model model) {
        // 현재 사용자의 세션 정보를 가져오고, 사용자가 없을 경우 기본값으로 1L 설정
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getSession();
        AuthUserVo authUser = (AuthUserVo) session.getAttribute("authUser"); // 사용자 정보 추출
        Long currentUserId = (authUser != null) ? authUser.getUserId() : null;

        // 새로운 플레이리스트를 생성하고 음악을 추가한 후, 해당 플레이리스트 정보를 모델에 추가

        Long newPlaylistId = playlistService.createPlaylistAndAdd(currentUserId, songId); // 현재 유저 아이디와 노래 아이디로 플레이 리스트 추가
        model.addAttribute("playlist", playlistService.getPlaylistDetails(newPlaylistId));
        // 새로운 플레이리스트 페이지를 표시하는 뷰를 반환
        return "playlist/new_playlist";
    }
}
