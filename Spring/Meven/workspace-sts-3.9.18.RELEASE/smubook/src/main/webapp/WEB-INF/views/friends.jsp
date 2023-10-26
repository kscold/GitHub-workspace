<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Friends</title>
</head>
<body>
    <h1>Friends</h1>
    <!-- 모든 사용자와 follow 여부를 표시 -->
    <c:forEach items="${allUsers}" var="user">
        <div>
            <label>${user.username}</label>
            <c:choose>
                <c:when test="${following.contains(user)}">
                    <a href="/unfollow/${user.id}">Unfollow</a>
                </c:when>
                <c:otherwise>
                    <a href="/follow/${user.id}">Follow</a>
                </c:otherwise>
            </c:choose>
        </div>
    </c:forEach>
</body>
</html>
