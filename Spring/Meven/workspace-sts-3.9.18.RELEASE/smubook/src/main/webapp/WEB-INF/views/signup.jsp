<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>smubook signup</title>
</head>
<body>
    <h3>smubook signup</h3>

    <form action="/smubook/signup" method="POST">
        사용자이름 : <input type="text" name="username"><br/>
        비밀번호 : <input type="password" name="password"><br/>
        <input type="submit" value="Sign Up">
        <input type="reset" value="Cancel">
    </form>

</body>
</html>
