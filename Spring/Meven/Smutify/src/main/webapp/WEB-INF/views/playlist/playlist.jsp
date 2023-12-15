<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Playlist</title>
</head>
<body>
<h2>Playlist Page</h2>
<!-- Display playlist details -->
<h3>${playlist.title}</h3>
<!-- Display songs in the playlist -->
<c:forEach var="song" items="${playlist.songs}">
    ${song.singer} - ${song.title} (${song.genre})<br>
    <!-- Add delete button for each song -->
    <a href="<c:url value='/playlist/${playlist.id}/delete/${song.id}' />">Delete</a><br>
</c:forEach>
</body>
</html>
