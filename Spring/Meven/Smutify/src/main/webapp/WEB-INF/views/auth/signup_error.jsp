<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Sign Up Error</title>
</head>
<body>
<h2>Sign Up Error</h2>
<p>이미 사용자 이름이 존재합니다. 다른 사용자 이름으로 회원가입해주세요</p>

<a href="<c:url value='/auth/user/signup'/>">Back to Sign Up</a>
</body>
</html>
