<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Smutify Login</title>
</head>
<body>
<h2>로그인</h2>
<form action="<c:url value='/auth/user/login' />" method="post">
    사용자: <input type="text" name="username" required/><br>
    비밀번호: <input type="password" name="password" required/><br>
    <input type="submit" value="로그인"/>
</form>
<a href="<c:url value='/auth/user/signup' />">회원가입</a>
</body>
</html>
