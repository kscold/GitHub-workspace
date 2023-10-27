<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>smubook Feed</title>
</head>
<body>
	<h1>smubook Feed</h1>
	<!-- 글 목록을 순회하며 표시 -->
	<c:forEach items="${posts}" var="post">
		<div>
			<p>${post.content}</p>

			<!-- 좋아요 버튼 -->
			<form action="/smubook/like" method="post">
				<input type="hidden" name="postId" value="${post.id}">
				<button type="submit">Like</button>
			</form>
			<p>좋아요: ${post.likes}</p>

			<!-- 댓글 창 -->
			<form action="/smubook/comment" method="post">
				<input type="hidden" name="postId" value="${post.id}">
				<textarea name="comment" required></textarea>
				<br>
				<button type="submit">댓글 추가</button>
			</form>

			<!-- 삭제 버튼 -->
			<form action="/smubook/delete" method="post">
				<input type="hidden" name="postId" value="${post.id}">
				<button type="submit">삭제</button>
			</form>
		</div>
	</c:forEach>

	<!-- 친구 페이지로 이동하는 버튼 -->
	<a href="/smubook/friends">친구</a>

	<!-- 글 작성 폼 -->
	<form action="/smubook/feed" method="post">
		<textarea name="content" required></textarea>
		<br>
		<button type="submit">작성</button>
	</form>

	<!-- 로그아웃 버튼 추가 -->
	<form action="/smubook/" method="get">
		<button type="submit">로그아웃</button>
	</form>
</body>
</html>
