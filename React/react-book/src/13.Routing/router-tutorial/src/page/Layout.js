import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1); // -1 값을 주어 이전 페이지로 이동할 수 있음
  };
  const goArticles = () => {
    // articles 경로로 이동
    navigate('/articles'); // 직접 패스를 지정
  };
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <mian>
        <Outlet />
      </mian>
    </div>
  );
};

export default Layout;
