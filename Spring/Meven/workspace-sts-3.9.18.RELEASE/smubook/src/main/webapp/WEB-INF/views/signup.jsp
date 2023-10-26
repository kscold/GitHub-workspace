<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Sign Up</title>
</head>
<body>
    <h3>This page is Sign Up.</h3>

    <form action="/smubook/signup" method="POST">
        Username : <input type="text" name="username"><br/>
        Password : <input type="password" name="password"><br/>
        <input type="submit" value="Sign Up">
        <input type="reset" value="Cancel">
    </form>

</body>
</html>
