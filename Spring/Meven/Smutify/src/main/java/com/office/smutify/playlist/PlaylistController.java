package com.office.smutify.playlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/playlist")
public class PlaylistController {

    @Autowired
    private PlaylistService playlistService;

    @GetMapping("/{playlistId}") // GET 요청을 처리하며, 경로에서 {playlistId}는 변수로 받아옴
    public String playlistPage(@PathVariable Long playlistId, Model model) {
        PlaylistVo playlist = playlistService.getPlaylistDetails(playlistId); // 플레이리스트의 세부 정보를 가져옴
        model.addAttribute("playlist", playlist); // 플레이리스트 정보를 모델에 추가합니다. 이 정보는 뷰에 사용
        return "playlist/playlist";
    }

    // 기존 플레이리스트에 음악 추가
    @PostMapping("/add/{playlistId}/{songId}")
    public String addToPlaylist(@PathVariable Long playlistId, @PathVariable Long songId) {
        playlistService.addToPlaylist(playlistId, songId); // playlistService를 통해 플레이리스트에 음악을 추가
        return "redirect:/playlist/" + playlistId;
    }

    // 새로운 플레이리스트 생성 및 음악 추가
    @PostMapping("/create/{songId}")
    public String createPlaylistAndAdd(@PathVariable Long songId) {
        Long newPlaylistId = playlistService.createPlaylistAndAdd(songId); // 새로운 플레이리스트를 생성하고 음악을 추가
        return "redirect:/playlist/" + newPlaylistId;
    }
}
