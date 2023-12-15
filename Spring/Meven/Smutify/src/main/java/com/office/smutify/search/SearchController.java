package com.office.smutify.search;

import com.office.smutify.playlist.PlaylistService;
import com.office.smutify.playlist.PlaylistVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/search")
public class SearchController {

    @Autowired
    private SearchService searchService;

    @Autowired
    private PlaylistService playlistService;

    @GetMapping
    public String searchPage(@RequestParam(name = "keyword", required = false, defaultValue = "") String keyword,
                             @RequestParam(name = "sortBy", required = false, defaultValue = "singer") String sortBy,
                             Model model) {
        List<SearchVo> searchResults = searchService.searchSongs(keyword, sortBy);
        model.addAttribute("searchResults", searchResults);

        // 플레이 리스트 설정
        List<PlaylistVo> userPlaylists = playlistService.getUserPlaylists();
        model.addAttribute("userPlaylists", userPlaylists); // 모델에 추가
        return "search/search";
    }
}

