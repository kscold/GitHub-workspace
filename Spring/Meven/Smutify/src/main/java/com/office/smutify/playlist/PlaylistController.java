package com.office.smutify.playlist;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/playlist")
public class PlaylistController {

    @GetMapping("/{playlistId}")
    public String playlistPage(@PathVariable Long playlistId) {
        // Implement playlist page logic
        return "playlist/playlist";
    }
}
