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
        System.out.println("[SearchController] searchPage()");

        // 검색어와 정렬 기준을 이용하여 노래를 검색하고 결과를 모델에 추가
        List<SearchVo> searchResults = searchService.searchSongs(keyword, sortBy);
        model.addAttribute("searchResults", searchResults);

        // 사용자의 플레이리스트 목록을 가져와서 모델에 추가
        List<PlaylistVo> userPlaylists = playlistService.getUserPlaylists();
        model.addAttribute("userPlaylists", userPlaylists);

        return "search/search";
    }
}

