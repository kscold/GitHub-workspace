package com.office.smutify.playlist;

import com.office.smutify.auth.user.AuthUserVo;
import com.office.smutify.song.SongService;
import com.office.smutify.song.SongVo;
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

    @Autowired
    private SongService songService;

    // Playlist 페이지를 표시하는 메소드
    @GetMapping("/{playlistId}")
    public String playlistPage(@PathVariable Long playlistId, Model model) {
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getSession();
        AuthUserVo authUser = (AuthUserVo) session.getAttribute("authUser");
        Long currentUserId = (authUser != null) ? authUser.getUserId() : null;

        if (currentUserId != null) {
            // 선택한 플레이리스트에 속한 노래 목록을 가져와서 모델에 추가
            List<SongVo> songsInPlaylist = playlistService.getSongsInPlaylist(currentUserId, playlistId);
            model.addAttribute("songsInPlaylist", songsInPlaylist);
        }

        return "playlist/playlist";
    }


//    @PostMapping("/add/{songId}")
//    public String showPlaylistSelection(@PathVariable Long songId, Model model) {
//
//        // 현재 사용자의 모든 플레이리스트를 가져와서 모델에 추가
//        List<PlaylistVo> userPlaylists = playlistService.getUserPlaylists();
//        model.addAttribute("userPlaylists", userPlaylists);
//
//        // 선택한 노래의 정보도 모델에 추가
//        SongVo song = songService.getSongDetails(songId);
//        model.addAttribute("song", song);
//
////        playlistService.addToPlaylist(playlistId, songId);
//
//        return "playlist/playlist";
//    }




    @PostMapping("/add")
    public String addToPlaylist(@RequestParam Long playlistId, @RequestParam Long songId, Model model) {
        // 현재 사용자의 모든 플레이리스트를 가져와서 모델에 추가
//        List<PlaylistVo> userPlaylists = playlistService.getUserPlaylists();
//        model.addAttribute("userPlaylists", userPlaylists);

        // 선택한 노래의 정보도 모델에 추가
        SongVo song = songService.getSongDetails(songId);
        model.addAttribute("song", song);

        // 선택한 플레이리스트에 노래를 추가
        playlistService.addToPlaylist(playlistId, songId);

        return "redirect:/search?keyword=&sortBy=id";
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


    // 장르 추가
    @PostMapping("/addGenre")
    public String addGenre(@RequestParam String genre, @RequestParam Long songId) {
        // 장르를 song_table에 추가하는 서비스 메서드 호출
        songService.addGenre(songId, genre);
        return "redirect:/search?keyword=&sortBy=id";
    }
}


