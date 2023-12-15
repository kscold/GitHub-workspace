<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Add to Playlist</title>
</head>
<body>
<h2>Add to Playlist</h2>

<h3>Select a Playlist</h3>
<form action="<c:url value='/playlist/add/${playlist.id}' />" method="post">
    <select name="playlistId">
        <c:forEach var="playlistItem" items="${userPlaylists}">
            <option value="${playlistItem.id}">${playlistItem.playlistName}</option>
        </c:forEach>
    </select>
    <!-- Add the following input field for songId -->
    <input type="hidden" name="songId" value="${selectedSong.id}"/>
    <input type="submit" value="Add to Playlist"/>
</form>

<h3>Selected Song</h3>
<p>Singer: ${selectedSong.singer}</p>
<p>Title: ${selectedSong.title}</p>
<p>Genre: ${selectedSong.genre}</p>

<p><a href="<c:url value='/search' />">Back to Search</a></p>

</body>
</html>
