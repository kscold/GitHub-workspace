<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>플레이리스트</title>
</head>
<body>
<h2>플레이리스트 관리</h2>

<h3>플레이 리스트</h3>

<c:if test="${not empty songsInPlaylist}">
    <c:forEach var="song" items="${songsInPlaylist}">
        <p>${song.title} - ${song.singer} (${song.genre})</p>
    </c:forEach>
</c:if>

<p><a href="<c:url value='/main' />">메인으로 돌아가기</a></p>

</body>
</html>
