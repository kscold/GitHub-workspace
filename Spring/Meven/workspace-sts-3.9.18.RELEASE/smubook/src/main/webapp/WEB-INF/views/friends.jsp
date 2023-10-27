<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title>smubook Friends</title>
</head>
<body>
	<h1>smubook Friends</h1>
	<c:if test="${not empty followSuccessMessage}">
		<p class="success-message">${followSuccessMessage}</p>
	</c:if>
	<c:if test="${not empty followErrorMessage}">
		<p class="error-message">${followErrorMessage}</p>
	</c:if>
	<c:if test="${not empty unfollowSuccessMessage}">
		<p class="success-message">${unfollowSuccessMessage}</p>
	</c:if>
	<c:if test="${not empty unfollowErrorMessage}">
		<p class="error-message">${unfollowErrorMessage}</p>
	</c:if>

	<table>
		<c:forEach var="user" items="${allUsers}">
			<tr>
				<td>${user.username}</td>
				<td><c:choose>
						<c:when test="${user.username eq currentUser.username}">
							<span>본인</span>
						</c:when>
						<c:otherwise>
							<c:choose>
								<c:when test="${following.contains(user.username)}">
									<form action="/unfollow" method="post">
										<input type="hidden" name="usernameToUnfollow"
											value="${user.username}" />
										<button type="submit">Unfollow</button>
									</form>
								</c:when>
								<c:otherwise>
									<form action="/follow" method="post">
										<input type="hidden" name="usernameToFollow"
											value="${user.username}" />
										<button type="submit">Follow</button>
									</form>
								</c:otherwise>
							</c:choose>
						</c:otherwise>
					</c:choose></td>
			</tr>
		</c:forEach>
	</table>
	<form action="feed" method="get">
		<input type="submit" />
	</form>
</body>
</html>
