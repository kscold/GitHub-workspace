<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Smutify Main</title>
</head>
<body>
<h2>Main Page</h2>
<!-- Add create playlist button -->
<a href="<c:url value='/search' />">Create Playlist</a>

<!-- Display existing playlists -->
<!-- You can use JSTL forEach loop to iterate through playlists -->
<c:forEach var="playlist" items="${playlists}">
    <a href="<c:url value='/playlist/${playlist.id}' />">${playlist.title}</a><br>
</c:forEach>
</body>
</html>
