<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%--<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>--%>

<%--<html>--%>
<%--<head>--%>
<%--    <title>Playlist</title>--%>
<%--</head>--%>
<%--<body>--%>
<%--<h2>Playlist Page</h2>--%>
<%--<!-- Display playlist details -->--%>
<%--<h3>${playlist.title}</h3>--%>
<%--<!-- Display songs in the playlist -->--%>
<%--<c:forEach var="song" items="${playlist.songs}">--%>
<%--    ${song.singer} - ${song.title} (${song.genre})<br>--%>
<%--    <!-- Add delete button for each song -->--%>
<%--    <a href="<c:url value='/playlist/${playlist.id}/delete/${song.id}' />">Delete</a><br>--%>
<%--</c:forEach>--%>
<%--</body>--%>
<%--</html>--%>


<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Playlist Page</title>
</head>
<body>
<h2>Playlist Page</h2>

<!-- Display Playlist Information -->
<h3>Playlist Information</h3>
<p>플레이리스트 제목: ${playlist.playlistName}</p>

<!-- Display Songs in Playlist -->
<h3>Songs in Playlist</h3>
<table border="1">
    <thead>
    <tr>
        <th>가수 이름</th>
        <th>노래 제목</th>
        <th>장르</th>
        <th>동작</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach var="song" items="${playlist.songs}">
        <tr>
            <td>${song.singer}</td>
            <td>${song.title}</td>
            <td>${song.genre}</td>
            <td>
                <form action="<c:url value='/playlist/remove/${playlist.id}/${song.id}' />" method="post">
                    <input type="submit" value="삭제">
                </form>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>

<!-- Add Song to Playlist Form -->
<h3>Add Song to Playlist</h3>
<form action="<c:url value='/playlist/add/${playlist.id}' />" method="post">
    <label for="songId">노래 선택:</label>
    <select id="songId" name="songId">
        <c:forEach var="song" items="${allSongs}">
            <option value="${song.id}">${song.title} - ${song.singer}</option>
        </c:forEach>
    </select>
    <input type="submit" value="추가">
</form>

<!-- Go Back to Search Page -->
<p><a href="<c:url value='/search' />">Search Page로 돌아가기</a></p>
</body>
</html>
