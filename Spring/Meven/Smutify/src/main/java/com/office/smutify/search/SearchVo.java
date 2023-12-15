package com.office.smutify.search;

import java.util.Objects;

public class SearchVo {
    private Long id;

    private String singer;
    private String title;
    private String genre;

    // 사용자가 검색을 통해 플레이 리스트를 만들어야하기 때문에

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SearchVo searchVo = (SearchVo) o;
        return Objects.equals(id, searchVo.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
