<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%--<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>--%>

<%--<html>--%>
<%--<head>--%>
<%--    <title>Playlist Page</title>--%>
<%--</head>--%>
<%--<body>--%>
<%--<h2>Playlist Page</h2>--%>

<%--<h3>Playlist Information</h3>--%>
<%--<p>플레이리스트 제목: ${playlist.id}</p>--%>
<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%--<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>--%>

<%--<html>--%>
<%--<head>--%>
<%--    <title>Playlist Page</title>--%>
<%--</head>--%>
<%--<body>--%>
<%--<h2>Playlist Page</h2>--%>

<%--<h3>Playlist Information</h3>--%>
<%--<p>플레이리스트 제목: ${playlist.id}</p>--%>

<%--<!-- Display Songs in Playlist -->--%>
<%--<h3>플레이리스트에 들어가 있는 곡</h3>--%>
<%--<table border="1">--%>
<%--    <thead>--%>
<%--    <tr>--%>
<%--        <th>가수 이름</th>--%>
<%--        <th>노래 제목</th>--%>
<%--        <th>장르</th>--%>
<%--        <th>동작</th>--%>
<%--    </tr>--%>
<%--    </thead>--%>
<%--    <tbody>--%>
<%--    <c:forEach var="song" items="${playlist.songs}">--%>
<%--        <tr>--%>
<%--            <td>${song.singer}</td>--%>
<%--            <td>${song.title}</td>--%>
<%--            <td>${song.genre}</td>--%>
<%--            <td>--%>
<%--                <form action="<c:url value='/playlist/remove/${playlist.id}/${song.id}' />" method="post">--%>
<%--                    <input type="submit" value="삭제">--%>
<%--                </form>--%>
<%--            </td>--%>
<%--        </tr>--%>
<%--    </c:forEach>--%>
<%--    </tbody>--%>
<%--</table>--%>

<%--<p><a href="<c:url value='/search' />">검색으로 돌아가기</a></p>--%>

<%--</body>--%>
<%--</html>--%>

<%--<!-- Display Songs in Playlist -->--%>
<%--<h3>플레이리스트에 들어가 있는 곡</h3>--%>
<%--<table border="1">--%>
<%--    <thead>--%>
<%--    <tr>--%>
<%--        <th>가수 이름</th>--%>
<%--        <th>노래 제목</th>--%>
<%--        <th>장르</th>--%>
<%--        <th>동작</th>--%>
<%--    </tr>--%>
<%--    </thead>--%>
<%--    <tbody>--%>
<%--    <c:forEach var="song" items="${playlist.songs}">--%>
<%--        <tr>--%>
<%--            <td>${song.singer}</td>--%>
<%--            <td>${song.title}</td>--%>
<%--            <td>${song.genre}</td>--%>
<%--            <td>--%>
<%--                <form action="<c:url value='/playlist/remove/${playlist.id}/${song.id}' />" method="post">--%>
<%--                    <input type="submit" value="삭제">--%>
<%--                </form>--%>
<%--            </td>--%>
<%--        </tr>--%>
<%--    </c:forEach>--%>
<%--    </tbody>--%>
<%--</table>--%>

<%--<p><a href="<c:url value='/search' />">검색으로 돌아가기</a></p>--%>

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

<h3>Playlist Information</h3>
<p>플레이리스트 제목: ${playlist.playlistName}</p>

<!-- Display Songs in Playlist -->
<h3>플레이리스트에 들어가 있는 곡</h3>
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
            </td>{playlist.songs}</td>
            </td>{song.id}</td>
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

<!-- Form to add a new song to the playlist -->
<h3>플레이리스트 곡 삭제</h3>



<p><a href="<c:url value='/search' />">검색으로 돌아가기</a></p>

</body>
</html>
