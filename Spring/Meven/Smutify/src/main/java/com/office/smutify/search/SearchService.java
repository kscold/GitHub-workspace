package com.office.smutify.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class SearchService {

    @Autowired
    private SearchDao searchDao;

    public List<SearchVo> searchSongs(String keyword, String sortBy) {
        return searchDao.searchSongs(keyword, sortBy);
    }
}