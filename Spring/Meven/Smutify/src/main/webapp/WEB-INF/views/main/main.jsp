<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Smutify Main</title>
</head>
<body>
<h2>메인 페이지</h2>

<a href="<c:url value='/search?keyword=&sortBy=id' />">Create Playlist</a>

<c:forEach var="playlist" items="${playlists}">
    <a href="<c:url value='/playlist/${playlist.id}' />">${playlist.playlistName}</a><br>
</c:forEach>
</body>
</html>
