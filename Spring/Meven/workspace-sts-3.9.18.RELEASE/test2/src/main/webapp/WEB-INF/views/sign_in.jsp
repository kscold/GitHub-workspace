<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<h3>This page is SIGN_IN.</h3>

	<form action="/hello/signInConfirm">
		ID: <Input type="text" name="m_id"> <br />
		PW: <Input type="password" name="m_pw"> <br />
		<Input type="submit" name="SIGN IN">
		<Input type="reset" name="CANCEL">
	</form>

</body>
</html>