<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Search</title>
    <script>
        function sortByChanged() {
            var sortBy = document.getElementById("sortBy").value;
            var keyword = document.getElementById("keyword").value;
            var url = "search?sortBy=" + sortBy + "&keyword=" + keyword;
            window.location.href = url;
        }
    </script>
</head>
<body>
<h2>Search Page</h2>

<form action="<c:url value='/search' />" method="get">
    <input type="text" id="keyword" name="keyword" placeholder="Search keyword"/>
    <select id="sortBy" name="sortBy" onchange="sortByChanged()">
        <option value="id" <c:if test="${param.sortBy == null || param.sortBy == 'id'}">selected</c:if>>Sort by ID
        </option>
        <option value="title" <c:if test="${param.sortBy == 'title'}">selected</c:if>>Sort by Title</option>
        <option value="singer" <c:if test="${param.sortBy == 'singer'}">selected</c:if>>Sort by Singer</option>
        <option value="genre" <c:if test="${param.sortBy == 'genre'}">selected</c:if>>Sort by Genre</option>
    </select>
    <input type="submit" value="Search"/>
</form>


<c:forEach var="result" items="${searchResults}">
    <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; border: 1px solid #ccc; padding: 10px; margin: 5px;">
        <div>
            순위: ${result.id}<br>
            제목: ${result.title}<br>
            가수: ${result.singer}<br>
            장르: ${result.genre}<br>
        </div>
        <div>
            <form action="<c:url value='/playlist/add' />" method="post">
                <input type="hidden" name="songId" value="${result.id}">
                <select name="playlistId">
                    <c:forEach var="playlist" items="${userPlaylists}">
                        <option value="${playlist.id}">${playlist.playlistName}</option>
                    </c:forEach>
                </select>
                <input type="submit" value="선택한 플레이리스트에 추가">
            </form>
            <form action="<c:url value='/playlist/create/${result.id}' />" method="post">
                <input type="submit" value="새로운 플레이 리스트에 추가">
            </form>
            <form action="<c:url value='/playlist/addGenre' />" method="post">
                <input type="hidden" name="songId" value="${result.id}">
                <input type="text" name="genre" placeholder="장르 입력">
                <input type="submit" value="장르 추가">
            </form>
        </div>
    </div>
</c:forEach>
</body>
</html>
