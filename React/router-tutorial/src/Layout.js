import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate(); //Link를 사용한 이동 말고 hook을 사용한 이동

    const goback = () => {
        //이전 페이지로 이동
        navigate(-1);//뒤로 가기 한번
    };

    const goArticles = () => {
        // articles 경로로 이동
        navigate('/articles', { replace: true }); //특정 경로로 이동
    }

    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
                <button onClick={goback}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet /> {/* Outlet를 선언해서 중첩 헤더를 만듬 */}
            </main>
        </div>
    );
};

export default Layout;