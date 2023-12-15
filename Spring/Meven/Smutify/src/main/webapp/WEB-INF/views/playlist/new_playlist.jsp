<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Playlist Page</title>
</head>
<body>
<h2>Playlist Page</h2>

<h3>Playlist Information</h3>
<p>플레이리스트 제목: ${playlist.playlistName}</p>


<h3>플레이리스트에 들어가 있는 곡</h3>
<table border="1">
    <thead>
    <tr>
        <th>노래 ID</th>
        <th>가수 이름</th>
        <th>노래 제목</th>
        <th>장르</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach var="song" items="${songsInPlaylist}">
        <tr>
            <td>${song.id}</td>
            <td>${song.singer}</td>
            <td>${song.title}</td>
            <td>${song.genre}</td>
        </tr>
    </c:forEach>
    </tbody>
</table>

<p><a href="<c:url value='/search' />">검색으로 돌아가기</a></p>

</body>
</html>
