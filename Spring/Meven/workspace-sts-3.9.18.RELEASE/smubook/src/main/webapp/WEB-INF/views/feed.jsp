<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>smubook Feed</title>
</head>
<body>
    <!-- Feed 내용을 표시하고 글 작성 폼을 여기에 추가 -->
    <h1>Main Feed</h1>
    <!-- 글 목록을 순회하며 표시 -->
    <c:forEach items="${posts}" var="post">
        <div>
            <p>${post.content}</p>
            <!-- Like 버튼, 댓글 창, 삭제 버튼 등을 여기에 추가 -->
        </div>
    </c:forEach>

    <!-- Friends 페이지로 이동하는 버튼 -->
    <a href="/friends">Friends</a>
    <!-- 새로운 글 작성 폼 -->
    <form action="/feed" method="post">
        <textarea name="content" required></textarea>
        <br>
        <button type="submit">Post</button>
    </form>
</body>
</html>
