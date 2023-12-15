package com.office.smutify.main;

import com.office.smutify.playlist.PlaylistService;
import com.office.smutify.playlist.PlaylistVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/main")
public class MainController {

//    @GetMapping
//    public String mainPage() {
//        // Implement main page logic
//        return "main/main";
//    }

    @Autowired
    private PlaylistService playlistService;

    @GetMapping
    public String mainPage(Model model) {
        // Get user-specific playlists
        List<PlaylistVo> playlists = playlistService.getUserPlaylists();
        model.addAttribute("playlists", playlists);

        return "main/main";
    }
}
