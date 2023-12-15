<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Sign Up</title>
</head>
<body>
<h2>Sign Up</h2>
<form action="<c:url value='/auth/user/signup' />" method="post">
    Username: <input type="text" name="username" required/><br>
    Password: <input type="password" name="password" required/><br>
    <input type="submit" value="Sign Up"/>
</form>
<a href="<c:url value='/auth/user/login' />">Back to Login</a>
</body>
</html>
