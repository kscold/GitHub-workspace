<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Smutify Sign Up</title>
</head>
<body>
<h2>회원가입</h2>
<form action="<c:url value='/auth/user/signup' />" method="post">
    사용자: <input type="text" name="username" required/><br>
    비밀번호: <input type="password" name="password" required/><br>
    <input type="submit" value="회원가입"/>
</form>
<a href="<c:url value='/auth/user/login' />">로그인으로 돌아가기</a>
</body>
</html>
