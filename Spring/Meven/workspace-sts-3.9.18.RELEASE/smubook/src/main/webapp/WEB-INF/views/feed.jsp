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

            <!-- Like 버튼 -->
            <form action="/smubook/like" method="post">
                <input type="hidden" name="postId" value="${post.id}">
                <button type="submit">Like</button>
            </form>
            <p>Likes: ${post.likes}</p>

            <!-- 댓글 창 -->
            <form action="/smubook/comment" method="post">
                <input type="hidden" name="postId" value="${post.id}">
                <textarea name="comment" required></textarea>
                <br>
                <button type="submit">Add Comment</button>
            </form>

            <!-- 삭제 버튼 -->
            <form action="/smubook/delete" method="post">
                <input type="hidden" name="postId" value="${post.id}">
                <button type="submit">Delete</button>
            </form>
        </div>
    </c:forEach>

    <!-- Friends 페이지로 이동하는 버튼 -->
    <a href="/smubook/friends">Friends</a>
    <!-- 새로운 글 작성 폼 -->
    <form action="/smubook/feed" method="post">
        <textarea name="content" required></textarea>
        <br>
        <button type="submit">Post</button>
    </form>
</body>
</html>
