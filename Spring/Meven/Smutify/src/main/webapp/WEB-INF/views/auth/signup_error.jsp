<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Smutify Sign Up Error</title>
</head>
<body>
<h2>회원가입 오류</h2>
<p>이미 사용자 이름이 존재합니다. 다른 사용자 이름으로 회원가입해주세요.</p>

<a href="<c:url value='/auth/user/signup'/>">회원가입으로 돌아가기</a>
</body>
</html>
