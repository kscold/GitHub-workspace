<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
  <title>Smutify Login error</title>
</head>
<body>
<h2>로그인 오류</h2>
<p>유요하지 않은 사용자 이름과 비빌번호입니다. 다시 시도해 주세요.</p>
<a href="<c:url value='/auth/user/login' />">로그인으로 돌아가기</a>
</body>
</html>
