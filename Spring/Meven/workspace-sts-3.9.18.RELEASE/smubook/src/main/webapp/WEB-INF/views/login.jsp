<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>smubook login</title>
</head>
<body>
<h1>smubook login</h1>
<form action="/smubook/login" method="post">
    <label for="username">사용자이름:</label>
    <input type="text" id="username" name="username" required>
    <br>
    <label for="password">비밀번호:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <input type="submit">
</form>
<a href="/smubook/signup">회원가입</a>
</body>
</html>
